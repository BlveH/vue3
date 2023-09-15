<template>
    <div class="card"  :class="{reverse:reverse}">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
interface CardProps{
    reverse?: boolean
}
withDefaults(defineProps<CardProps>(),{
    reverse:false
})
</script>

<style  scoped>
.card{
    background: #fff;
    color: #212121;
}
.card.reverse{
    background: #212121;
    color: #fff;
}
</style>