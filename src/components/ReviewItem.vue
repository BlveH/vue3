<template>
    <Card>
        <button class="close" @click="store.deleteReview(item)">
            <i class="fas fa-times"></i>
        </button>
        <button class="edit" @click="store.editReview(item)">
            <i class="fas fa-edit"></i>
        </button>
        <div class="num-display">
            {{item.rating}}
        </div>
        <div class="text-display">
            {{ item.text }}
        </div>
    </Card>
</template>

<script lang="ts" setup>
    import Card from "./shared/Card.vue"

    import {useReviewStore} from "../stores/review"
    import {ReviewItem} from '../types'

    const store = useReviewStore()
    defineProps<{
        item:ReviewItem
    }  >()
</script>

<style lang="scss" scoped>

</style>