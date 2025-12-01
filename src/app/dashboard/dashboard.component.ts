import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products:any=[];
  id:string= '';
  constructor(private activatedroute:ActivatedRoute,private dashboardservics:DashboardService, private router: Router){

 



    dashboardservics.getprodects().subscribe(
    
      (res:any)=>{
        
        this.products=res.data;
      },
      (err:any)=>{
        alert("error")
      }
    )
      
    

      }
      submit(){
        this.router.navigate(['dashboard/product'])
      }
     logout(){
      localStorage.removeItem("token");
      this.router.navigateByUrl('/login')
     }
  }




