<template>
  <div class="flex flex-grow">
    <div class="w-full space-y-4">
      <NewPost />
     
    </div>
    <div class="hidden md:block ml-4">
      
    </div>
  </div>
</template>
<script>
import NewPost from "../components/posts/NewPost.vue";
import Recommended from "../components/layouts/recommended/Recommended.vue";

export default {
  name: "Home",
  components: {
    NewPost,
    Recommended,
  },
};
</script>
<style></style>
