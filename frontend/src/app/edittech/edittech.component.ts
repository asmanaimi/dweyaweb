import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';

@Component({
  selector: 'app-edittech',
  templateUrl: './edittech.component.html',
  styleUrls: ['./edittech.component.css']
})
export class EdittechComponent implements OnInit {
      name: String;
      email:string;
      cin:string;
      tel:string;
      adress:string;
      status:string;
      password:String;
      @ViewChild(MatSidenav)
      sidenav!: MatSidenav;
  constructor(private pharmacienService:PharmacienService, private router: Router) { }

  ngOnInit(): void {
    this.pharmacienService.getOneTech(this.router.url.slice(-24)).subscribe(data=>{
      this.name=data['result']['name'];
      this.email=data['result']['email'];
      this.cin=data['result']['cin'];
      this.tel=data['result']['tel'];
      this.adress=data['result']['adress'];
      this.password=data['result']['password'];
      this.status=data['result']['status'];

    })
  }
  
   
  update(){
    this.pharmacienService.updatetech(this.router.url.slice(-24),{
      'name':this.name,
    'email':this.email,
   'cin':this.cin,
   'tel':this.tel,
  'adress':this.adress,
'password':this.password,
'status':this.status

}).subscribe(data=>{

    })
    this.router.navigate(['/Listdestechniciens']);

  }
  
  onLogOut(){
    this.pharmacienService.logOut();
   // this.route.navigate(['/login']);
    return false;
  }
}
