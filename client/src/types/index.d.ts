import { IBook } from "./book"



interface IBanner {
    src: string,
    alt: string
}




interface IRanking {
    id: string
    title: string,
    books: IBook[]
}



export interface IhomeData {
    banner: IBanner[],
    limited: IBook[],
    popular: IBook[],
    ranking:IRanking[],
    recommend:IBook[]
}