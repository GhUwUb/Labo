import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Login } from './login';
import { TokenDTO } from './token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_KEY = 'token';
  readonly URL : string = "https://khun.somee.com/api"
  private _authTokenSubject : BehaviorSubject<TokenDTO | undefined>
  = new BehaviorSubject<TokenDTO | undefined>(undefined)

  constructor(private _http: HttpClient) {

   }

   login(login: Login): Observable<TokenDTO> {
    return this._http.post<TokenDTO>(this.URL + "/login" , login).pipe(
      tap((token: TokenDTO) =>{
        this._authTokenSubject.next(token);
        sessionStorage.setItem(this.AUTH_KEY, JSON.stringify(token));
      } )
    );
  }

  get auth() {
    const authString = sessionStorage.getItem(this.AUTH_KEY);
    if( authString ){
      return JSON.parse( authString ) as TokenDTO
    }
    else {
      return undefined
    }
  }

  get token() {
    return this.auth?.token
  }

  get isConnected() {
    return !!this.auth
  }
}
