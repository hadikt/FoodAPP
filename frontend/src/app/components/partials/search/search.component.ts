import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchTerm='';
constructor(activeRoute:ActivatedRoute,private router:Router){
  activeRoute.params.subscribe((params)=>{
    if(params.searchTerm)this.searchTerm=params.searchTerm;
  })
}
ngOnInit(): void {
}
search(Term:string):void{
if(Term)
this.router.navigateByUrl('/search/'+Term)
}
}

