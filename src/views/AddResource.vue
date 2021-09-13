<template>
  <div class="resource">
      <ImagePreview v-show="this.$store.state.resourcePhotoPreview" />
      <ResourcePreview v-show="this.$store.state.resourceModalPreview"/>
      <div class="container">
          <div :class="{invisible: !error}" class="err-message">
              <p><span>Error:</span>{{ this.errorMsg}}</p>
          </div>
          <div class="resource-info">
            <input type="text" placeholder="Enter Resource Title" v-model="resourceTitle">
            <input type="text" placeholder="Enter Link to Resource" v-model="resourceLink"> 
            <div class="upload-file">
                <label for="resource-photo">Upload Cover Photo</label>
                <input type="file" ref="resourcePhoto" @change="fileChange" id="resource-photo" accept=".png, .jpg, .jpeg">
                <button class="preview" @click="closePreview" :class="{ 'button-inactive': !this.$store.state.resourcePhotoFileURL }">Preview Photo</button>
                <span> File Chosen : {{ this.$store.state.resourcePhotoFileURL }}</span>
            </div>
          </div>
          <div class="editor">
              <vue-editor :editorOptions="editorSettings" v-model="resourceHTML"  />
          </div>
          <div class="resource-actions">
              <button>Post Resource</button>
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
export default {
    name: "AddResource",
    components : {
        ResourcePreview,
        ImagePreview, 
    },
    data() {
        return {
            error: null,
            errorMsg: "",
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
                return this.$store.state.resourceHTML
            },
            set(payload) {
                this.$store.commit("newResourcePost", payload)
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
    methods: {
        fileChange() {
            this.file = this.$refs.resourcePhoto.files[0];
            const fileName = this.file.name;
            this.$store.commit("fileNameChanged", fileName);
            this.$store.commit("addPhotoURL", URL.createObjectURL(this.file));
            // console.log(this.$state.resourcePhotoName);
        },
        closePreview() {
            this.$store.commit("openPhotoPreview");
        },
        modalPreview() {
            return this.$store.commit("openResourcePreview");
        }
    }
}
</script>

<style lang="css">
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
</style>