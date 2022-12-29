<template>
  <div class="flex justify-center">
        <div class="w-[1280px] h-full">
            <!-- navbar -->
            <Navbar class="py-5 px-5 sm:px-8" />
            <div class="flex py-5 px-5 sm:px-8">
                <!-- sidebar -->
                <h1>This is Sidebar</h1>
                <Sidebar />
                <h1>This the router view</h1>
                <!-- content -->
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "../components/layouts/navbar/Navbar.vue";
import Sidebar from "../components/layouts/sidebar/Sidebar.vue";
import Home from "./Home.vue";

export default {
  name: "Main",
  components: {
    Navbar,
    Sidebar,
    Home,
  },
};
</script>
<style></style>
