import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';

@Component({
  selector: 'app-ajoutertech',
  templateUrl: './ajoutertech.component.html',
  styleUrls: ['./ajoutertech.component.css']
})
export class AjoutertechComponent implements OnInit {
  name: string;
  email:string;
  cin:string;
  adress:string;
  password :string;
  tel:string;
  owner:String;
  submitted = false;
  constructor(private _pharmacienService:PharmacienService ,private route:Router) { }

  ngOnInit() {

    const currentUser = this._pharmacienService.getCurrentUser();
   this.owner = currentUser.email ;
    console.log(JSON.stringify(this.owner));
  
  }
  onLogOut(){
    this._pharmacienService.logOut();
   // this.route.navigate(['/login']);
    return false;
  }
  addtech(){
    if (!this.name || !this.email || !this.password || !this.cin || !this.tel || !this.adress){
       console .log('all fields are required');
       return false;
     }
     const technicien={
       name:this.name,
       email:this.email,
      cin:this.cin,
      tel:this.tel,
      adress:this.adress,
      owner: this.owner,

       password:this.password
     }
 
     this._pharmacienService.addtechnicien(technicien).subscribe(
       resp =>{
      
           console.log('technicien aded') ;
           this.route.navigate(['/Listdestechniciens'])
             }
      );
   }
}
