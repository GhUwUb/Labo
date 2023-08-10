import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm !: FormGroup;

  constructor(private _loginService : AuthService, private _fb : FormBuilder, private _router : Router){
    this.loginForm = this._fb.group({
      username : [null, [Validators.required]],
      password : [null, [Validators.required]]
    })
  }

  login(){
    if(this.loginForm.valid){
    console.log(this.loginForm.value);

    this._loginService.login(this.loginForm.value).subscribe();
    this._router.navigate(['/home'])
  }
    else{
      console.log(this.loginForm.value);
    }
  }
}
