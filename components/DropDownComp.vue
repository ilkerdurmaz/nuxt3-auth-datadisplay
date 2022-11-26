<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: [
      {
        name: "default option",
        value: "default",
      },
    ],
  },
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["valueChanged"]);
</script>

<template>
  <select
    :name="props.name"
    :id="props.id"
    @change="
      (e) => {
        emit('valueChanged', e.target.value);
      }
    "
    class="p-2 rounded border hover:border-black cursor-pointer"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>
