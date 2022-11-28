<script setup>
const props = defineProps(["pageAmount", "selectedPage"]);
const emit = defineEmits(["buttonClicked"]);
function clickHandler(val) {
  emit("buttonClicked", val);
}
</script>

<template>
  <nav class="inline-flex">
    <ul>
      <li>
        <button
          @click="clickHandler('previous')"
          class="w-20"
        >
          {{ $t("previous") }}
        </button>
      </li>
      <li
        v-for="(pageNumber, index) in props.pageAmount"
        :key="index"
        :class="{ 'bg-gray-400 text-white': selectedPage === index + 1 }"
      >
        <button @click="clickHandler(pageNumber)">{{ pageNumber }}</button>
      </li>
      <li>
        <button
          @click="clickHandler('next')"
          class="w-20"
        >
          {{ $t("next") }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
ul {
  @apply flex divide-x-2 border-2 border-gray-400 rounded-lg overflow-hidden;
}
li {
  @apply flex justify-center hover:bg-gray-200;
}
button {
  @apply p-3;
}
</style>
