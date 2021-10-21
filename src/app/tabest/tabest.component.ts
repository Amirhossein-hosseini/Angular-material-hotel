import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tabest',
  templateUrl: './tabest.component.html',
  styleUrls: ['./tabest.component.scss']
})
export class TabestComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message:string,action:string){
    return this.snackBar.open(message,action)
  }

}
