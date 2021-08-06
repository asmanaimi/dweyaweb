import { Component, OnInit } from '@angular/core';
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
      password:String;
  constructor(private pharmacienService:PharmacienService, private router: Router) { }

  ngOnInit(): void {
    this.pharmacienService.getOneTech(this.router.url.slice(-24)).subscribe(data=>{
      this.name=data['result']['name'];
      this.email=data['result']['email'];
      this.cin=data['result']['cin'];
      this.tel=data['result']['tel'];
      this.adress=data['result']['adress'];
      this.password=data['result']['password'];
    })
  }
  
   
  update(){
    this.pharmacienService.updatetech(this.router.url.slice(-24),{
      'name':this.name,
    'email':this.email,
   'cin':this.cin,
   'tel':this.tel,
  'adress':this.adress,
'password':this.password
}).subscribe(data=>{

    })
    this.router.navigate(['/Listdestechniciens']);

  }
}
