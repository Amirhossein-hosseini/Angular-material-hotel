import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
navBar:any
  title = 'Angular';
  show:boolean = false;
  Toggle(){
    this.show = ! this.show
  }
  ngOnInit(): void {

}

getClass(){
  if(window.innerWidth < 576){
   return this.navBar = true
  }else{
   return this.navBar = false
  }


  }
}



