import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname:string='';
  lname:string='';
  age:string='';
  terms:boolean=false;
  
  onSubmit(formValue:NgForm){
    console.log(formValue.value)
    console.log(formValue)
  }
  resetForm(formValue:NgForm){
    formValue.reset();
  }
}
