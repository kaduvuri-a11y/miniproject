import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
   productform:FormGroup=new FormGroup({
     name:new FormControl(),
     imageUrl:new FormControl(),
     brand:new FormControl(),
     price: new FormControl(),
     category:new FormControl(),
     stock:new FormControl(),
     description:new FormControl()
   })
   product:any="";
   constructor(private dashboardservice:DashboardService){}
    submit(){
      console.log(this.productform.value);
      this.dashboardservice.crateproduct(this.productform.value).subscribe(
        (data:any)=>{
          alert('create susccfully !!!');
        },
        (err:any)=>{
          alert(err.err?.message);
          console.log(err)
        }
      )


    }
   

}
