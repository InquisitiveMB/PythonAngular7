import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { getRenderedText } from '@angular/core/src/render3';

export interface TokenPayload{
 twitterID: string
}

export interface UserTokenPayload{
  _id: string,
  uname: string,
  email: string,
  contact: string,
  gender: string,
  age: string,
  psw: string
 }
interface TokenResponse{
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string 
  
  constructor(private http: HttpClient, private router: Router) { }
  
  private saveToken(token: string):void{

    localStorage.setItem('usertoken', token)
    this.token = token
  }

  public postTwitterID(user: TokenPayload): Observable<any>{
    const base = this.http.post('http://localhost:5000/twitterID', user)
    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  public register(user: UserTokenPayload): Observable<any>{
    const base = this.http.post('http://localhost:5000/register', user)
    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  public login(user: UserTokenPayload): Observable<any>{
    const base = this.http.post('http://localhost:5000/login', user)
    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    
    return request
  }

}
