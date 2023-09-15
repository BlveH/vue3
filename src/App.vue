
<template>
  <Header/>
  <RouterView />

</template>

<script lang="ts" setup  >
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { onMounted } from "vue";
import { useReviewStore } from "./stores/review";

const store = useReviewStore()
onMounted(() =>{
  store.fetchReview()
})
</script> 
