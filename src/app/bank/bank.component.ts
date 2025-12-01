import { Component } from '@angular/core';
import { BanksService } from '../banks.service';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
     banks:any="";
     
  constructor(private bankservice:BanksService){
    bankservice.getbanks().subscribe(
      (data:any)=>{
        this.banks=data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }



  deletebank(id:string){
    this.bankservice.deletebank(id).subscribe(
      (data:any)=>{
        alert('dalete sucessfully');
        location.reload();
      },
      (error:any)=>{
        alert('internal server error')
      }

    )

  }

}
