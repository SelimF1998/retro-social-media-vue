<template>
  <div class="flex">
    <div class="mt-5">
      <i class="fa-brands fa-ravelry text-blue-600 text-5xl cursor-pointer"></i>
    </div>
    <div class="flex flex-grow justify-between">
      <div class="mt-5 ml-28">
        <input
          type="text"
          placeholder="Seach"
          class="px-5 w-full rounded-xl py-3 bg-slate-600 text-gray-200 focus:outline-none"
        />
      </div>
      <div class="flex gap-5">
        <div class="icons flex gap-10 mt-5 ml-5">
          <i
            class="fa-solid fa-book text-slate-300 text-3xl cursor-pointer"
          ></i>
          <i
            class="fa-solid fa-message text-slate-300 text-3xl cursor-pointer"
          ></i>
          <i
            class="fa-solid fa-bell text-slate-300 text-3xl cursor-pointer"
          ></i>
        </div>
        <div>
          <div class="dropdown dropdown-bottom dropdown-end mb-10 mt-3">
            <div
              tabindex="0"
              class="btn m-1 bg-gray-900 hover:bg-gray-700  flex gap-2 items-center justify-between outline-none"
            >
              <div class="avatar online">
                <div class="w-8 rounded-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6mtTNoC51xUKowTpHiWKkXL_d2vyFmlcEkc5lnpd-NPXh8XdfbhqewXb_cmK0tpG1Pc&usqp=CAU"
                  />
                </div>
              </div>
              <div>
                <h1 class="text-gray-400 font-bold" >Selim</h1>
              </div>
              <div class="ml-2">
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </div>
            <ul
              tabindex="0"
              class="dropdown-content menu shadow bg-base-100 rounded-box"
            >
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style></style>
