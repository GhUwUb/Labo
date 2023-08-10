import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenDTO } from 'src/app/services/auth/token';
import { Member } from 'src/app/services/member/member';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  storedUser ?: Member;
  constructor(private _auth : AuthService){
    if(_auth.isConnected)
      this.storedUser=_auth.auth?.user;
  }
}
