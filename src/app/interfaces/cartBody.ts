export interface ICartOrderBody {
    userId:number,
    date:string,
    products:productOrder[]

}
export interface productOrder{
    productId:number,
    quantity:string
}

