export type ReviewItem = {

    text: string,
    rating: number,
    id: number
}

type NewReview = Omit<ReviewItem,"id">