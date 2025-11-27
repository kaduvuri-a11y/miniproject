import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  loginform:FormGroup=new FormGroup({
  name: new FormControl(),
  email:new FormControl(),
  mobile : new FormControl(),
  password :new FormControl(),
  confirmpassword : new FormControl(),

  })
  constructor(private authservies:AuthService ,private router:Router){}
  submit(){
    console.log(this.loginform.value);
    this.authservies.createuser(this.loginform.value).subscribe(
      (data:any)=>{
        alert('created sucefully');
        this.router.navigateByUrl("/login");
      },
      (err:any)=>{
        alert(err.err?.message)
      }
    )
    

  
  }
  

}
