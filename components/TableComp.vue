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
    <thead class="bg-gray-400 text-white">
      <tr>
        <th
          v-for="property in columns"
          :key="property.id"
          scope="col"
          class="p-4 text-start"
        >
          {{ $t(property.title) }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y-2">
      <tr
        v-for="row in data"
        :key="row.id"
        @click="rowSelectHandler(row.id)"
        class="hover:bg-gray-200 cursor-pointer"
      >
        <td
          v-for="value in row"
          class="p-4 w-4"
          :class="{
            'bg-gray-300': selectedRows.some((item) => item === row.id),
          }"
        >
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
