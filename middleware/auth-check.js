export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();
  console.log("auth", auth.isAuth.value.status);
  if (auth.isAuth.value.status) {
    return true
  }
  return navigateTo('/login');
});
