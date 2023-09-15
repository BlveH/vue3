<template>
    <div class="feedback-stats">
        <h4>
            {{ store.reviewCounts ? store.reviewCounts : "No"}}
            Reviews
        </h4>
        <h4>Avarage Rating: {{ isNaN(store.avarageRating) ? 0 :store.avarageRating}}</h4>
    </div>
</template>

<script lang="ts" setup>
import {useReviewStore} from "../stores/review"

const store = useReviewStore()
</script>

<style lang="scss" scoped>

</style>