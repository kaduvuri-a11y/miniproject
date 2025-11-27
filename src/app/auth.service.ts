import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }
  login(user:any){
    return this.httpclient.post("https://shop-ease-mit.vercel.app/api/auth/login",user)
  }
  createuser(user:any){
    return this.httpclient.post("https://shop-ease-mit.vercel.app/api/auth/signup",user)
  }
}
