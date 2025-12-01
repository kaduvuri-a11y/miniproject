import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product:any=[];
  constructor(private dashboradservice:DashboardService){
    dashboradservice.getprodects().subscribe(
      (data:any)=>{
        this.product=data.data;
      }
    )
  }
delete(id:string){
  this.dashboradservice.deleteproduct(id).subscribe(
    (data:any)=>{
      alert('deleted sucessfully');
       location.reload()
    },
     (err:any)=>{
      alert('internal server error')
     }
  )

}
}
