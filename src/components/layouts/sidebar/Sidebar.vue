<template>
  <div class="pr-8">
    <div class="grid gap-5 space-y-6 ml-4 w-12 smd:w-32">
      <div class="home mt-2">
        <router-link to="/"
          ><i
            class="fa-solid fa-house text-slate-300 text-3xl cursor-pointer"
          ></i
        ></router-link>
      </div>
      <div class="profile mt-10">
        <router-link to="/profile">
          <i class="fa-solid fa-user text-slate-300 text-4xl cursor-pointer"></i
        ></router-link>
      </div>
      <div class="explore mt-10">
        <router-link to="/explore"
          ><i
            class="fa-solid fa-compass text-slate-300 text-3xl cursor-pointer"
          ></i
        ></router-link>
      </div>
      <div class="settings mt-10">
        <router-link to="/settings"
          ><i
            class="fa-solid fa-gear text-slate-300 text-3xl cursor-pointer"
          ></i
        ></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
<style lang=""></style>
