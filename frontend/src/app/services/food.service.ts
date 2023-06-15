import { Injectable } from '@angular/core';
import { food } from '../shared/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():food[]{
    return sample_foods
      }

      getAllFoodBySearch(Term:string){
   return this.getAll().filter(food => food.name.toLowerCase().includes(Term.toLowerCase()))
      }

      getAllTags():Tag[]{
return sample_tags
      }
      getAllFoodByTag(tag:string):food[]{
        return tag==="All"?
        this.getAll():

        this.getAll().filter(food=>food.tags?.includes(tag))
      }

      showFooById(foodid:string):food{
return this.getAll().find(food =>food.id==foodid)??new food()
      }
}
