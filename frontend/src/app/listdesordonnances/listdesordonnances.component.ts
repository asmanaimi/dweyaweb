import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';

@Component({
  selector: 'app-listdesordonnances',
  templateUrl: './listdesordonnances.component.html',
  styleUrls: ['./listdesordonnances.component.css']
})
export class ListdesordonnancesComponent implements OnInit {
  ordonnances: any=[];
  listp:String;

  constructor(private _pharmacienService:PharmacienService, private route:Router) { }

  ngOnInit(): void {
    const currentUser = this._pharmacienService.getCurrentUser();
    const query = { listp : currentUser.listp};
    console.log(JSON.stringify(query));
    this._pharmacienService.getListOrdo(query).subscribe(
      resp => {
        this.ordonnances = resp.ordonnances;
      }
      
    )
    console.log(JSON.stringify(this.ordonnances));

  }
 
}

