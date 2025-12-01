import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-bank-dateils',
  templateUrl: './bank-dateils.component.html',
  styleUrls: ['./bank-dateils.component.css']
})
export class BankDateilsComponent {
  banks:any="";
  constructor(private activatedroute:ActivatedRoute,
              private bankservice:BanksService
  ){
    activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data);
        bankservice.getbank(data.id).subscribe(
          (data:any)=>{
            this.banks=Date
          }
        )
      }
    )
  }

}
