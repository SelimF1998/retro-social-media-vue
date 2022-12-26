<template>
  <div class="container mx-auto px-4 mt-1 ml-20">
    <div class="flex gap-5">
      <div class="avatar">
        <div class="w-11 rounded-full cursor-pointer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6mtTNoC51xUKowTpHiWKkXL_d2vyFmlcEkc5lnpd-NPXh8XdfbhqewXb_cmK0tpG1Pc&usqp=CAU"
          />
        </div>
      </div>
      <div class="flex-1 pl-1">
        <textarea
          class="block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="What's on your mind?"
          id="mytext"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewPost",
};
</script>
<style lang=""></style>
