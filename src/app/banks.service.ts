import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  delete(id: string, any: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient) { }
    getbanks(){
      return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
    }
    getbank(id:string){
      return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
     }


     deletebank(id: string, any?: any){
      return this.httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
     }
}
