import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      resourcePosts: [],
      postLoaded: null,
      resourceHTML: "Add your resource and content here...",
      resourceTitle: "",
      resourcePhotoName: "",
      resourcePhotoFileURL: "",
      resourcePhotoPreview: null,
      resourceModalPreview: null,
      resourceLink: "",
      user:null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUserName: null,
      profileId: null,
      profileInitials: null
  },
  getters: {
    resourcePostsFeed(state) {
      return state.resourcePosts.slice(0, 6);
    },
    resourceAllPosts(state) {
        return state.resourcePosts;
    }
  },
  mutations: {
    newResourceContent(state, payload) {
        state.resourceHTML = payload;
        // console.log(state.resourceHTML);
    },
      updateResourceTitle(state,payload) {
        state.resourceTitle = payload;
        // console.log(state.resourceH);
      },
      fileNameChanged(state, payload) {
        state.resourcePhotoName = payload;
      },
      addPhotoURL(state, payload){
          state.resourcePhotoFileURL = payload;
      },
      openPhotoPreview(state) {
        state.resourcePhotoPreview = !state.resourcePhotoPreview;
      },
      openResourcePreview(state) {
          state.resourceModalPreview = !state.resourceModalPreview;
      },
      setResourceState(state, payload) {
        state.resourceTitle = payload.resourceTitle;
        state.resourceHTML = payload.resourceHTML;
        state.resourceLink = payload.resourceLink;
        state.resourcePhotoFileURL = payload.resourceCoverPhoto;
        state.resourcePhotoName = payload.resourceCoverPhotoName;
        state.resourceLink = payload.resourceLink;
      },
      filterResourcePost(state, payload) {
        state.resourcePosts = state.resourcePosts.filter(post => post.resourceID !== payload);
      },
      addResourceLink(state, payload) {
          state.resourceLink = payload;
      },
      updateUser(state, payload){
          state.user = payload;
      },
    setProfileInfo(state, doc) {
        state.profileId = doc.id;
        state.profileEmail = doc.data().email;
        state.profileFirstName= doc.data().firstName;
        state.profileLastName = doc.data().lastName;
        state.profileUserName = doc.data().username;
    },
    setprofileIcon(state) {
        state.profileInitials = 
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
        state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
        state.profileLastName = payload;
    },
    changeUserName(state, payload) {
        state.profileUserName = payload;
    }
  },
  actions: {
      async getCurrentUser({commit}) {
          const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
          const dbResults = await dataBase.get();
          commit("setProfileInfo", dbResults);
          commit("setprofileIcon");
      },
      async updateUserSettings({commit, state}) {
          const dataBase = await db.collection('users').doc(state.profileId);
          await dataBase.update({
              firstName: state.profileFirstName,
              lastName: state.profileLastName,
              username: state.profileUserName
          });
          commit("setprofileIcon");
      },
      async deletePost({commit}, payload) {
        console.log(payload);
        const getPost = await db.collection('blogPosts').doc(payload);
        // console.log(getPost);
        await getPost.delete();
        commit('filterResourcePost', payload);
      },
      async updatePost({commit, dispatch}, payload) {
          commit('filterResourcePost', payload);
          await dispatch("getPost");
      },
      async getPost({ state }) {
        const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
        const dbResults = await dataBase.get();
        dbResults.forEach((doc) => {
          if (!state.resourcePosts.some((post) => post.blogID === doc.id)) {
            const data = {
              resourceID: doc.data().resourceID,
              resourceHTML: doc.data().resourceHTML,
              resourceCoverPhoto: doc.data().resourceCoverPhoto,
              resourceTitle: doc.data().resourceTitle,
              resourceDate: doc.data().date,
              resourceCoverPhotoName: doc.data().resourceCoverPhotoName,
              resourceLink: doc.data().resourceLink,
            };
            state.resourcePosts.push(data);
        }
        });
        state.postLoaded = true;
      },
  },
})
