<script setup>
const supabase = useSupabaseClient();
const email = ref("");
const password = ref(null);

async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) throw error;
}
const user = useSupabaseUser();
</script>
<template>
  <main>
    <h1>Login Page</h1>
    <section>
      <label for="email">
        email
        <input type="email" v-model="email" />
      </label>
      <label for="password">
        password
        <input type="password" v-model="password" />
      </label>

      <button @click="signIn">Sign In with E-Mail</button>
    </section>
    <section>
      <h1>Active user information</h1>
      <p v-if="user">{{ user.email }}</p>
    </section>
  </main>
</template>