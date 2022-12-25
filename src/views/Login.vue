<template>
  <div class="grid gap-10 items-center justify-center">
    <i class="fa-brands fa-ravelry mt-24 mx-auto text-blue-600 text-6xl"></i>
    <div class="flex card w-96 items-center bg-gray-900 shadow-xl">
      <div class="card-body grid gap-5">
        <div class="card-title flex gap-3">
            <h2 class="text-gray-400 font-bold text-3xl">Login</h2>
            <h2 class="text-gray-700  text-3xl">|</h2>
            <h2 class="text-gray-700 font-bold text-3xl cursor-pointer">Sign up</h2>
        </div>
        <h2 class="text-slate-700 font-bold">
          Get login to access your account
        </h2>
        <form class="grid gap-5 mt-6">
          <input
            type="text"
            placeholder="Email Address"
            class="input w-72 bg-slate-800 shadow appearance-none border rounded py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Password"
            class="input w-72 bg-slate-800 shadow appearance-none border rounded py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div class="remember-me flex gap-2">
            <input type="radio" class="bg-slate-700" />
            <h1 class="text-slate-700 font-bold">Remember Me</h1>
          </div>
        </form>
        <div class="card-actions grid gap-4 justify-center mt-5">
          <button class="btn bg-indigo-700 hover:bg-indigo-800 w-36 rounded-3xl">Login</button>
          <h1 class="text-slate-700 font-bold text-center">Forget Password</h1>
        </div>
      </div>
    </div>
    <div class="bottom mx-auto mt-5">
      <div class="icon-name flex gap-3">
        <i class="fa-brands fa-ravelry text-blue-600 text-6xl"></i>
        <h2 class="text-gray-400 font-bold text-6xl" >Retro</h2>
      </div>
      <div class="social-media-icons mt-5 flex gap-2 items-center justify-center">
        <div class="w-9 h-9 rounded-full bg-slate-900 cursor-pointer flex items-center justify-center">
            <i class="fa-brands fa-facebook-f text-slate-300"></i>
        </div>
        <div class="w-9 h-9 rounded-full bg-slate-900 cursor-pointer flex items-center justify-center">
            <i class="fa-brands fa-twitter text-slate-300"></i>
        </div>
        <div class="w-9 h-9 rounded-full bg-slate-900 cursor-pointer flex items-center justify-center">
            <i class="fa-brands fa-linkedin text-slate-300"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Login",
};
</script>
<style></style>
