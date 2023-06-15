import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { food } from './shared/models/food';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:Term',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
