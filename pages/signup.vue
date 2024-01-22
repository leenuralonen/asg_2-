<script setup>
const supabase = useSupabaseClient();


const email = ref("");
const password = ref(null);

const successMsg = ref(null);
async function signUp() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check email to confirm account";
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="signUp">
      <label for="email">
        Email:
        <input type="email" v-model="email" />
      </label>
      <label for="password">
        Password:
        <input type="password" v-model="password" />
      </label>
      <button @click="signUp">Sign Up</button>
    </form>
  </main>
</template>