<script setup>
const emit = defineEmits(["formSubmitted"]);

function submitHandler(e) {
  const { email, password } = e.target;

  const isValidMail = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/.test(
    email.value
  );

  if (isValidMail && password.value.length > 3) {
    emit("formSubmitted", {
      email: email.value,
      password: password.value,
    });
  } else alert("Please correct login credentials!");
}
</script>

<template>
  <form
    @submit.prevent="submitHandler"
    class="flex flex-col gap-4 px-4 max-w-xs"
  >
    <h1 class="text-5xl my-2 text-center">Sign-in</h1>
    <InputComp
      placeholder="E-Mail"
      type="text"
      name="email"
    ></InputComp>

    <InputComp
      placeholder="Password"
      type="password"
      name="password"
    ></InputComp>
    <ButtonComp>Login</ButtonComp>
  </form>
</template>

<style scoped></style>
