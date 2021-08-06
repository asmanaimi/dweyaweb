import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  name: string;
  cin: string;
  tel:string;
  adress: string;
  listp:string;
  password: string;
  constructor(private _pharmacienService:PharmacienService ,private route: Router) { }

  ngOnInit(): void {
  }
  registerPharmacien(){
    if ( !this.email || !this.name || !this.cin || !this.adress || !this.tel|| !this.password||!this.listp){
       console .log('all fields are required');
       return false;
     }
     const pharmacien={
       
       email:this.email,
      name:this.name,
       cin:this.cin,
       adress:this.adress,
       tel:this.tel,
       listp:this.listp,
       password:this.password
     }
 
     this._pharmacienService.register(pharmacien).subscribe(
       resp =>{
         if(!resp.success){console.log('error');
        
        }
         
         else if (resp.success){console.log('register pharmacien success') ;
        this.route.navigate(['/login']);
        }
          
       }
       
       );
       
   }

}
