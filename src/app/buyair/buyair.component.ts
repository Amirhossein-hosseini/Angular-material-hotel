import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { nameCoutry, _filter } from './country';
import {startWith, map,debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-buyair',
  templateUrl: './buyair.component.html',
  styleUrls: ['./buyair.component.scss']
})
export class BuyairComponent implements OnInit {



  stateGroups: nameCoutry[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tehran', 'varamin']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupsOption!: Observable<nameCoutry[]>;

  constructor(private snackBar:MatSnackBar,private _formBuilder:FormBuilder) { }

  state:FormGroup = this._formBuilder.group({
    nameCoutry:['',Validators.maxLength(10),Validators.required]
  })

  ngOnInit(): void {
this.stateGroupsOption = this.state.get('nameCoutry')!.valueChanges.pipe(
  debounceTime(3),

  startWith(''),
  map(value =>this._filterGroup(value))
)


  }
  openSnackBar(message:string,action:string){
  //  return alert(this.state.value);
return this.snackBar.open(message,action)
  }

  private _filterGroup(value:string):nameCoutry[]{
    if(value){
      return this.stateGroups.map(group =>({letter:group.letter,names:_filter(group.names,value)}))
      .filter(group => group.names.length>0);
    }
    return this.stateGroups;
  }


}
