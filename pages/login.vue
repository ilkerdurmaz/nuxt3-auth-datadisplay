<script setup>
import useAuth from "@/composables/useAuth";
async function submitHandler(val) {
  const { data } = await useFetch("/api/auth", {
    method: "POST",
    body: val,
  });

  if (data.value.status !== 200) {
    alert(data.value.message);
    return;
  }

  const auth = useAuth();
  auth.setAuth(true);
  navigateTo("/");
}
</script>

<template>
  <div class="flex justify-center items-center p-56">
    <FormComp @form-submitted="submitHandler"></FormComp>
  </div>
</template>

<style scoped>
input {
  @apply border-2 rounded;
}
</style>
