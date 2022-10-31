
export class Cart {
    constructor(
        private userId: string,
        private productId: string,
        private name: string,
        private price: string,
        private quantity: number,
        private date: number
    ){}

    getUserId ():string {
        return this.userId
    }

    getProductId ():string {
        return this.productId
    }

    getName ():string {
        return this.name
    }

    getPrice ():string {
        return this.price
    }

    getQuantity ():number {
        return this.quantity
    }
    getDate ():number {
        return this.date
    }


}