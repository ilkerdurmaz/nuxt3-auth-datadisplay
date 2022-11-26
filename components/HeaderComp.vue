<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  langs: {
    type: Array,
    default: [
      {
        name: "Türkçe",
        value: "tr",
      },
    ],
  },
  mainButtonName: {
    type: String,
    default: "Main Button",
  },
  mainButtonShow: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["langChanged", "mainButtonClicked"]);
const langChangeHandler = (val) => emit("langChanged", val);
const mainButtonClickedHandler = () => emit("mainButtonClicked");
</script>

<template>
  <header class="header-bar">
    <div class="header-container">
      <NuxtLink to="/">
        <span class="text-xl no-underline">{{ props.title }}</span>
      </NuxtLink>
      <div class="flex justify-between items-center gap-2">
        <ButtonComp
          @click="mainButtonClickedHandler"
          v-if="props.mainButtonShow"
          >{{ props.mainButtonName }}</ButtonComp
        >
        <DropDownComp
          :options="langs"
          @value-changed="langChangeHandler"
        ></DropDownComp>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-bar {
  @apply border-b shadow;
}
.header-container {
  @apply flex justify-between items-center p-2 max-w-7xl mx-auto;
}
</style>
