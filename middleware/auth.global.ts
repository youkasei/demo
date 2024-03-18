import { useMyStore } from "../store/global";
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to)
  const { cmsToken } = useMyStore();
  // console.log('cmsToken:',cmsToken)
  // if ( !cmsToken && to.path !== '/login') {
  //      return navigateTo('/login')
  //  }
});
