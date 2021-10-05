<template>
  <div class="resource">
      <ImagePreview v-show="this.$store.state.resourcePhotoPreview" />
      <ResourcePreview v-show="this.$store.state.resourceModalPreview"/>
      <Loading v-show="loading" />
      <div class="container">
          <div :class="{invisible: !error}" class="err-message">
              <p><span>Error: </span>{{ this.errorMsg }}</p>
          </div>
          <div class="resource-info">
            <input type="text" placeholder="Enter Resource Title" v-model="resourceTitle">
            <input type="text" placeholder="Enter Link to Resource" v-model="resourceLink"> 
            <div class="upload-file">
                <label for="resource-photo">Upload Cover Photo</label>
                <input type="file" ref="resourcePhoto" @change="fileChange" id="resource-photo" accept=".png, .jpg, .jpeg">
                <button class="preview" @click="closePreview" :class="{ 'button-inactive': !this.$store.state.resourcePhotoFileURL }">Preview Photo</button>
                <span> File Chosen : {{ this.$store.state.resourcePhotoName }}</span>
            </div>
          </div>
          <div class="editor">
                <vue-editor  v-model="resourceHTML" useCustomImageHandler/>
          </div>
          <div class="resource-actions">
              <button @click="updateResource">Post Resource</button>
              <button @click="modalPreview" class="router-button">Post Preview</button>
          </div>
      </div>
  </div>
</template>

<script>
import ImagePreview from '../components/ImagePreview.vue';
import ResourcePreview from '../components/resourcePreview.vue'
import Quill from 'quill';
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
import { VueEditor } from "vue2-editor";
import firebase from 'firebase/app'
import 'firebase/storage'
import db from '../firebase/firebaseInit'
import Loading from '../components/Loading.vue';
export default {
    name: "AddResource",
    components : {
        ResourcePreview,
        ImagePreview, 
        VueEditor,
        Loading
    },
    data() {
        return {
            error: null,
            loading: null,
            errorMsg: "",
            routeID: null,
            currentResource: null,
            editorSettings: {
                modules: {
                    ImageResize : {},
                }
            }
        }
    },
    computed: {
        profileId() {
            return this.$store.state.profileId
        },
        resourcePhotoName() {
            return this.$store.state.resourcePhotoName;
        },
        resourceTitle: {
            get() {
                return this.$store.state.resourceTitle
            },
            set(payload) {
                this.$store.commit("updateResourceTitle", payload)
            }
        },
        resourceHTML: {
            get() {
                return this.$store.state.resourceHTML;
            },
            set(payload) {
                this.$store.commit("newResourceContent", payload);
            }
        },
        resourceLink: {
            get() {
                return this.$store.state.resourceLink
            },
            set(payload) {
                this.$store.commit("addResourceLink", payload)
            }
        },
    }, 
    async mounted() {
        this.routeID = this.$route.params.resourceid;
        this.currentResource = await this.$store.state.resourcePosts.filter((post) => {
            return post.resourceID === this.routeID;
        });
        this.$store.commit('setResourceState', this.currentResource[0]);
    },
    methods: {
        fileChange() {
            this.file = this.$refs.resourcePhoto.files[0];
            const fileName = this.file.name;
            this.$store.commit("fileNameChanged", fileName);
            this.$store.commit("addPhotoURL", URL.createObjectURL(this.file));
        },
        closePreview() {
            this.$store.commit("openPhotoPreview");
        },
        modalPreview() {
            return this.$store.commit("openResourcePreview");
        },
        async updateResource() {
            const dataBase = await db.collection('blogPosts').doc(this.routeID);
            if(this.resourceTitle.length !==0 && this.resourceHTML.length !== 0 && this.resourceLink.length !==0){
                if(this.file){
                    this.loading = true;
                    const storageRef = firebase.storage().ref();
                    const docRef = storageRef.child(`documents/ResourceCoverPhotos/${this.$store.state.resourcePhotoName}`);
                    docRef.put(this.file).on("state_changed", (snapshot) => {
                        console.log(snapshot)
                    }, (err) => {
                        console.log(err);
                        this.loading=false;
                    }, async () => {
                        const downloadURL = await docRef.getDownloadURL();

                        await dataBase.set({
                            resourceID: dataBase.id,
                            resourceHTML: this.resourceHTML,
                            resourceCoverPhoto: downloadURL,
                            resourceCoverPhotoName: this.resourcePhotoName,
                            resourceTitle: this.resourceTitle,
                            profileID: this.profileId,
                        });
                        this.loading = false;
                        this.$router.push({ name: "Resource"});
                    })
                    return;
                }
                this.loading = true;
                await dataBase.update({
                    resourceHTML: this.resourceHTML,
                    resourceTitle: this.resourceTitle,
                });
                await this.$store.dispatch('updatePost', this.routeID);
                this.loading = false;
                this.$router.push({name: "Resource" });
            }
            this.error = true;
            this.errorMsg = "Please fill out the title, link and description!!!";
            setTimeout(() => {
                this.error=false;
                this.errorMsg=""
            }, 5000)
        }
    }
}
</script>

<style lang="css">
.err-message {
    width: 50vw;
    background-color: rgb(167, 55, 55);
    padding: 5px;
    border-radius: 10px;
    color: lightcyan;
    /* font-weight: 700;
    font-size: 1rem; */
    margin-bottom: 10px;
    letter-spacing: 2px;
}
.resource{
    margin: 8vh 0px;
}
.container .invisible{
    display: none;
}
.container .resource-info .upload-file{
    margin: 32px 0;
}
.container .resource-info input{
    border: none;
    outline: none;
    padding: 5px 60px 5px 0px;
    margin-right: 26px;
    border-bottom: 2px solid rgb(88, 86, 86);
    margin-bottom: 30px;
}
.container .resource-info label, button {
    transition: 0.3s all ease;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 8px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;
    border: none;
    margin-right: 20px;
}
.button-inactive{
    background-color: rgba(87, 180, 87, 0.479) !important;
}
.container .resource-info button{
    background-color: rgb(87, 180, 87);
}
.container .resource-info label:hover,.container .resource-actions button:hover{
    background-color: rgba(48, 48, 48, 0.7);
}
#resource-photo{
    display: none;
}
.container .resource-actions button{
    margin-top: 24px;
}
.container .resource-actions .router-button{
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 8px 24px;
    color: #fff;
    background-color: rgb(87, 180, 87);
    text-decoration: none;
    border: none;
}
.quillWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

.ql-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: scroll;
    }

.ql-editor {
      padding: 20px 16px 30px;
    }
</style>