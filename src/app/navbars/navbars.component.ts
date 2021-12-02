import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {
"myReactiveForm":FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm= new FormGroup({
      'fname':new FormControl(null),
      'lname':new FormControl(null),
      'email':new FormControl(null),
      'password':new FormControl(null),
    });
  }
  onSubmit(){
    console.log(this.myReactiveForm.value);
  }

}
