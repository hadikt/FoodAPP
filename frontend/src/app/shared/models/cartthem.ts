import { food } from "./food";

export  class Cartthem{
  constructor(public food:food){
  }
quantity:number=1;
price:number=this.food.price;
}
