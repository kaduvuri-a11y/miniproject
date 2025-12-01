import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpclient:HttpClient) { }
  getprodects(){
    return this.httpclient.get("https://shop-ease-mit.vercel.app/api/products")
  }
   getproducts(id:string){
    return this.httpclient.get("https://shop-ease-mit.vercel.app/api/products/"+id);
  }
  crateproduct(product:any){
    return this.httpclient.post("https://shop-ease-mit.vercel.app/api/products",product)
  }
  deleteproduct(id:string){
      return this.httpclient.delete("https://shop-ease-mit.vercel.app/api/products/"+id)
  }
}


