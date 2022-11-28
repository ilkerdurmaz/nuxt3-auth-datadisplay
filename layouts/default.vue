<script setup>
const langs = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "Türkçe",
    value: "tr",
  },
];
useHead({
  title: "Display Data App",
  meta: [
    {
      name: "description",
      content: "Nuxt 3 App with TailwindCSS",
    },
  ],
});

const route = useRoute();
async function logOut() {
  await useFetch("/api/logout");
  const auth = useAuth();
  auth.setAuth(false);
  navigateTo("/login");
}
</script>

<template>
  <div>
    <HeaderComp
      title="Display Data App"
      :langs="langs"
      :main-button-show="!(route.path === '/login')"
      :main-button-name="$t('logout')"
      @main-button-clicked="logOut"
    ></HeaderComp>

    <div class="max-w-7xl mx-auto my-4 rounded px-2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
