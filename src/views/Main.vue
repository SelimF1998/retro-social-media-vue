<template>
    <div>
        <Navbar class="h-20" />
        <div class="flex h-screen" >
            <Sidebar />
            <Home />
        </div>
        
    </div>
</template>
<script>
import Navbar from '../components/layouts/navbar/Navbar.vue';
import Sidebar from '../components/layouts/sidebar/Sidebar.vue'
import Home from './Home.vue'


export default {
    name: "Main",
    components: {
        Navbar,
        Sidebar,
        Home
    }
}
</script>
<style>
    
</style>