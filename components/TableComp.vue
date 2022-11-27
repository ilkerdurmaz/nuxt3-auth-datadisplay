<script setup>
const props = defineProps(["data", "columns"]);
const emit = defineEmits(["selectedRowsChanged"]);
const selectedRows = ref([]);

function rowSelectHandler(rowId) {
  const selectedIndex = selectedRows.value.findIndex((item) => item === rowId);
  if (selectedIndex > -1) {
    selectedRows.value.splice(selectedIndex, 1);
    emit("selectedRowsChanged", selectedRows.value);
    return;
  }
  selectedRows.value.push(rowId);
  emit("selectedRowsChanged", selectedRows.value);
}
</script>

<template>
  <table class="min-w-full divide-y-2 divide-gray-400">
    <thead class="bg-gray-100">
      <tr>
        <th
          v-for="property in columns"
          :key="property.id"
          scope="col"
          class="p-4"
        >
          {{ property.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in data"
        :key="row.id"
        @click="rowSelectHandler(row.id)"
        class="hover:bg-gray-200 cursor-pointer border-b"
      >
        <td
          v-for="value in row"
          class="p-4 w-4 text-center"
          :class="{
            'bg-gray-300': selectedRows.find((item) => item === row.id),
          }"
        >
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
