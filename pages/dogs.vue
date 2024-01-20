<script setup>
const {data} = await useFetch ("api/dogs");
const breeds = data;
console.log(breeds);
</script>
<template>
  <main>
    <header> <h1>Dog Breeds</h1> </header>
      <div>
        <u1> 
          <li v-for="breed in breeds" :key="breed.id">
          {{ breed }}
          </li>
        </u1>
      </div>
    
  </main>
</template>