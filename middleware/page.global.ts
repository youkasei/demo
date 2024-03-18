export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(from);
  if (to.fullPath === "/") {
    return navigateTo("/main");
  }
});
