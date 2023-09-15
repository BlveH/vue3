<template>
  <ul class="rating">
    <li v-for="n in 10" :key="`rating_${n}`">
      <input
        type="radio"
        :id="`num${n}`"
        name="rating"
        :value="n"
        :checked="selected === n"
        v-model="selected"
      />
      <label :for="`num${n}`" >
        {{ n }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts" setup> 
import { ref, watch } from "vue";

interface RatingSeclectedProps{
  rating:number
}

const props = defineProps<RatingSeclectedProps>()
const emit = defineEmits(["setRating"])
const selected = ref(props.rating)
watch(selected,(newVal) =>{
  emit('setRating', newVal )
})
</script>
