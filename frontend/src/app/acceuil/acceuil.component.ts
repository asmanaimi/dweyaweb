import { Component,ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent  implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private _pharmacienService:PharmacienService ,private route: Router) {}
  ngOnInit(): void {
  
  }
 
  onLogOut(){
    this._pharmacienService.logOut();
   // this.route.navigate(['/login']);
    return false;
  }
}