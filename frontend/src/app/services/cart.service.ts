import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { food } from '../shared/models/food';
import { Cartthem} from '../shared/models/cartthem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:cart= new cart();
private cartsubject:BehaviorSubject<cart>=new BehaviorSubject(this.cart)
  constructor() { }
  addcart(food:food):void{
  let cartthem = this.cart.items.find(item => item.food.id===food.id);
  if(cartthem)
   return;
   this.cart.items.push(new Cartthem(food))
}
removecart(foodid:string):void{
this.cart.items = this.cart.items
.filter(item => item.food.id!=foodid)
}
changequantity(foodid:string, quantity:number){
let cartthem=this.cart.items.find(item=>item.food.id===foodid);
if(!cartthem)return;
cartthem.quantity=quantity;
cartthem.price=quantity*cartthem.food.price;
}
clearcart(){
  this.cart=new cart();
}
getcartObservable():Observable<cart>{
  return this.cartsubject.asObservable();
}
}
