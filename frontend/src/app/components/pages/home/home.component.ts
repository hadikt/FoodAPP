import { Component, OnInit } from '@angular/core';
import { food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  food:food[]=[];
favotite: any;
  constructor(private foodservice:FoodService,activatedroute:ActivatedRoute){
    activatedroute.params.subscribe((params)=>{
      if(params.Term)
      this.food=this.foodservice.getAllFoodBySearch(params.Term);
      else if(params.tag)
      this.food=this.foodservice.getAllFoodByTag(params.tag)
      else
      this.food=foodservice.getAll();
    })

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  myColorVaraible(){
    return document.body.style.color='grey'
  }
}
