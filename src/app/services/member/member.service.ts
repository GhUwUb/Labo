import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  readonly URL : string = "https://khun.somee.com/api"

  constructor(private _http : HttpClient) { }

  postMember(memberToAdd : Member) : void{
    this._http.post(URL + "/Member", memberToAdd );
  }
}
