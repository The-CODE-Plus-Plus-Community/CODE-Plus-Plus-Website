<template>
<div class="home">
  <Banner />
  <Working />
  <Resources />
  <Mentors />
</div>
</template>

<script>
import Banner from '../components/heroSection.vue'
import Working from '../components/working.vue'
import Mentors from "../components/Mentors.vue"
import Resources from "../components/Resources.vue"
export default {
  name: "Home",
  components: { Mentors, Resources, Working, Banner },
};
</script>
<style scoped>
</style>