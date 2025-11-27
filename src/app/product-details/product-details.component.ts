import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product:any={};
  id:string = '';

  constructor(private activatedroute:ActivatedRoute,private dashbordservice:DashboardService){
    activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data);

        dashbordservice.getproducts(data.id).subscribe(
          (data:any)=>{
            
            this.product=data.data;
          
          }
        )
        
      }
    );
  }


}
