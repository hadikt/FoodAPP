import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
food!:food

constructor(activateroute:ActivatedRoute,foodservice:FoodService){
  activateroute.params.subscribe((params)=>{
    if(params.id)
    this.food=foodservice.showFooById(params.id)
  })
}
  ngOnInit(): void {

  }
}
