
import {defineStore} from "pinia"

export const useReviewStore = defineStore('review',{
    state: ()=>({
        review: [] as any[],
        editedData:{
            editable: false,
            item:null
        }    
    }),
    actions:{
        async addReview(review: any ):Promise<void>{
            // eslint-disable-next-line no-useless-catch
            try {
                const res = await fetch(`http://localhost:5000/reviews/`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(review)
            })
            const newReview:any = await res.json()
            console.log(newReview)
            this.review = [newReview, ...this.review]
            } catch (error) {
                throw error
            }
        }
    }
})