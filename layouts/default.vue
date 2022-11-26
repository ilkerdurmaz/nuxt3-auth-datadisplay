<script setup>
const langs = [
  {
    name: "Türkçe",
    value: "tr",
  },
  {
    name: "English",
    value: "eng",
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

function langChanged(val) {
  console.log(val);
}
function logOut() {
  console.log("logOut button clicked");
}
</script>

<template>
  <div>
    <HeaderComp
      title="Display Data App"
      :langs="langs"
      @lang-changed="langChanged"
      :main-button-show="!(route.path === '/login')"
      main-button-name="Log Out"
      @main-button-clicked="logOut"
    ></HeaderComp>

    <div class="max-w-7xl mx-auto my-4 rounded px-2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
