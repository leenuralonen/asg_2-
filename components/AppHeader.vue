<template>
  <header>
    <div>
      <NuxtLink to="/">Logo: User Name</NuxtLink>
    </div>
    <nav>
      <NuxtLink to="employees">Employees</NuxtLink>
      <nuxtLink to="dogs">Dogs</nuxtLink>
      <nuxtLink to="signup">Sign Up Page</nuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
display: flex;
justify-content: space-between;
gap: 2rem;
padding: 2rem;
color: whitesmoke;
background-color: blue;
}
a {
  color: white;
  text-decoration: mediumpurple;
}
a:hover {
  color:blue;

}
nav{
  display: flex;
  justify-content: space-between;
  gap: 12px
}

</style>