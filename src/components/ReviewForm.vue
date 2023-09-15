<template>
    <Card>
        <form @submit.prevent="handleSubmit">
            <h2>How would you rate your service with us?</h2>
            <!--Rating Component-->
            <rating-select :rating="rating" @setRating="setRating"/>
            <div class="input-group">
                <input type="text" placeholder="Write a review" v-model="text"/>
                <button type="submit" class="btn btn-primary" :disabled="btnDisabled"></button>
            </div>
            <div class="message" v-if="message!== ' '" >
                {{ message }}
            </div>
        </form>
    </Card>
</template>

<script lang="ts" setup>
    import Card from "./shared/Card.vue";
    import { ref,watch } from "vue";
    import RatingSelect from "./RatingSelected.vue"
    import {useReviewStore} from "../stores/review"
    import { storeToRefs} from "pinia";

    const store = useReviewStore()
    const text = ref('')
    const btnDisabled = ref(false)
    const message = ref('')
    const rating = ref(10)
    const setRating = (val:number)=>{
        rating.value = val;
        console.log(val );
    }

    const { editedContent } = storeToRefs(store);

    watch(editedContent, (newData) => {
        if (newData && newData.editable) {
            text.value = newData.item.text;
            rating.value = newData.item.rating;
        }
    });



    watch(text, (newVal)=>{
        if(newVal.trim().length <= 10){
            btnDisabled.value = true
            message.value = "Text must be at least 10 characters "
        }else{
            btnDisabled.value = false
            message.value = ''
        }
    })

    const handleSubmit = () =>{
        const newReview = {
            text: text.value,
            rating: rating.value,
            
        }
        if (store.editedContent.editable) {
      
            store.updateReview({
            ...newReview,
            id: store.editedContent.item.id,
            });
        } else {
      
            store.addReview(newReview);
        }

    }
</script>

<style  scoped>

</style>