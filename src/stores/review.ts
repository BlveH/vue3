import type { ReviewItem, NewReview } from "@/types"
import {defineStore} from "pinia"

interface EditedData{
    editable:boolean,
    item:null | ReviewItem
}
export const useReviewStore = defineStore('review',{
    state: ()=>({
        review: [] as ReviewItem[],
        editedData:{
            editable: false,
            item:null
        } as EditedData
    }),
    actions:{
        async addReview(review: NewReview ):Promise<void>{
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
        },
        async fetchReview(){
            try {
                const review  = await fetch(`http://localhost:5000/reviews/?_sort=id&_order=desc`)
                const data = await review.json()
                this.review = data
            } catch (error) {
                console.log(error)
            }
        },
        editReview(review:ReviewItem){
           try {
            const editedData = {
                editable:true,
                item:review
            }
            this.editedData = editedData
           } catch (error) {
            console.log(error)
           }
        },
        async updateReview(review: ReviewItem) {
            try {
                const res = await fetch(`http://localhost:5000/reviews/${review.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(review)
                })
        
                const updatedReview = await res.json()
                const reviews = this.review.map((item: ReviewItem) => item.id === review.id ? updatedReview : item)
                this.review = reviews
                this.fetchReview()
                const editedData = {
                    editable: false,
                    item: null
                }
                this.editedData = editedData
            } catch (error) {
                console.log(error)
            }
        },
        
        async deleteReview(review:ReviewItem){
            await fetch(`http://localhost:5000/reviews/${review.id}`,{
                method:"DELETE",
                
            })
            this.review = this.review.filter((rev:ReviewItem) => rev.id !== review.id)
            this.fetchReview()
        
        }

    },
    getters:{
        avarageRating(state){
            let tmp = state.review.reduce((acc, cur)=>{
                return acc + cur.rating
            },0) / state.review.length

            tmp = Number(tmp.toFixed(1).replace(/[.,]0$/,""))
            return tmp
        },
        reviewCounts ():number{
            return this.review.length
        },
        reviewContent():ReviewItem[]{
            return this.review
        },
        editedContent():EditedData{
            return this.editedData
        }
    }
})