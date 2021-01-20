/**
 * Ficha prática 9 - angular-product-app
 * @author Pedro Machado "pedroma2000"
 */
export class Product {
    _id: string;
    name: string;
    description: string;
    quantity: number;

    constructor(name:string, description:string, quantity:number){
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}