<script setup>
definePageMeta({
  middleware: "auth-check",
});

const tableColumns = ref([
  {
    id: 1,
    title: "id",
  },
  {
    id: 2,
    title: "moviename",
  },
  {
    id: 3,
    title: "category",
  },
  {
    id: 4,
    title: "imdb",
  },
  {
    id: 5,
    title: "meta",
  },
]);

const tableData = ref([]);
const pageAmount = ref(0);
const pageNumber = ref(1);
const pageSize = [
  { name: "5", value: "5" },
  { name: "10", value: "10" },
];
const maxRowSize = ref("5");

async function getTableData(pageNumber, size) {
  const authCookie = useCookie("authCookie");

  const { data } = await useFetch("/api/data", {
    params: {
      page: pageNumber,
      size,
    },
    headers: {
      Authorization: authCookie.value?.token,
    },
  });

  if (!data.value) {
    navigateTo("/");
    return;
  }

  if (data.value.status === 401) {
    navigateTo("/login");
    return;
  }

  if (data.value.status !== 200) {
    alert("Fetching Data Error, Status:" + data.value.status);
    return [];
  }

  pageAmount.value = data.value.pageAmount;
  return data.value.data;
}

async function paginationHandler(val) {
  if (typeof val === "number") pageNumber.value = val;
  if (val === "next" && pageNumber.value < pageAmount.value) pageNumber.value++;
  if (val === "previous" && pageNumber.value > 1) pageNumber.value--;
  tableData.value = await getTableData(pageNumber.value - 1, maxRowSize.value);
}

watch(maxRowSize, async () => {
  pageNumber.value = 1;
  tableData.value = await getTableData(0, maxRowSize.value);
});

onMounted(async () => {
  //fix for fetch data on page reload
  setTimeout(async () => {
    tableData.value = await getTableData(0, maxRowSize.value);
  });
});
</script>

<template>
  <div>
    <div class="flex items-center justify-between py-2">
      <div class="flex items-center ml-auto gap-2">
        <span class="text-lg">{{ $t("pagesize") }}: </span>
        <DropDownComp
          :options="pageSize"
          v-model="maxRowSize"
        ></DropDownComp>
      </div>
    </div>
    <div class="rounded-lg border-2 border-gray-400">
      <TableComp
        :columns="tableColumns"
        :data="tableData"
      ></TableComp>
    </div>
    <div class="flex justify-center py-4">
      <PaginationComp
        :pageAmount="pageAmount"
        :selectedPage="pageNumber"
        @buttonClicked="paginationHandler"
      ></PaginationComp>
    </div>
  </div>
</template>

<style scoped></style>
