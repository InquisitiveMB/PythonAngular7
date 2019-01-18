import { Component, OnInit } from '@angular/core';
import { AuthService, UserTokenPayload} from '../../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  credentials: UserTokenPayload = {
    _id: '',
    uname: '',
    email: '',
    contact: '',
    gender: '',
    age: '',
    psw: ''
  }

  login(){
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/register')
      },
      err => {
        console.error(err);
      }
    )
  }

  ngOnInit() {
  }

}
