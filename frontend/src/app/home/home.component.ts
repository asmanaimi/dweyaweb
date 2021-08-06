import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;
  constructor(private _pharmacienService:PharmacienService ,private route: Router) { }
 
  ngOnInit(): void {
  }
  onLoginPharmacien(){
    if ( !this.email || !this.password){
       console .log('all fields are required');
       return false;
     }
     const pharmacien={
       
       email:this.email,
       password:this.password
     }
 
     this._pharmacienService.login(pharmacien).subscribe(
       resp =>{
         if(!resp.success){console.log('error');
        
        }
         
         else if 
         
         (resp.success){console.log('login pharmacien success') ;
         this._pharmacienService.saveUserDate(resp.token, resp.pharmacien);

         this.route.navigate(['/Acceuil']);
        }
          
       }
       
       );
       
   }

}