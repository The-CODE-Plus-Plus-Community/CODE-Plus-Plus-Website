import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      resourceHTML: "Add your resource and content here...",
      resourceTitle: "",
      resourcePhotoName: "",
      resourcePhotoFileURL: "",
      resourcePhotoPreview: null,
      resourceModalPreview: null,
      resourceLink: null,
      user:null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUserName: null,
      profileId: null,
      profileInitials: null
  },
  mutations: {
      newResourcePost(state, payload) {
        state.resourceHTML = payload;
      },
      updateResourceTitle(state,payload) {
        state.resourceTitle = payload;
        console.log(state.resourceTitle);
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
        //   state.resourcePhotoFileURL = state.resourcePhotoFileURL;
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
      }
  },
  modules: {
  }
})
