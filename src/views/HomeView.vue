

<template>
  <div class="home">
    <div class="container">
      <!--Reviews Form-->
      <review-form/>
      <!--Reviews Stats-->
      <review-stats/>
      <!--Reviews List-->
      <review-list/>
    </div>
  </div>
</template>

<script lang="ts" setup >
  import ReviewForm from "../components/ReviewForm.vue";
  import ReviewStats from "../components/RatingStats.vue"
  import ReviewList from "../components/ReviewList.vue"
</script>
