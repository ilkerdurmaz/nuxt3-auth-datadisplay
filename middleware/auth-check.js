export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();
  if (auth.isAuth.value.status) {
    return true;
  }
  return navigateTo("/login");
});
