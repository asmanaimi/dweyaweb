import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';

@Component({
  selector: 'app-affectordo',
  templateUrl: './affectordo.component.html',
  styleUrls: ['./affectordo.component.css']
})
export class AffectordoComponent implements OnInit {
  medecin: String;
  techniciens: any=[];
      email:string;
      priseencharge:string;
      listp:string;
      technicien:string;
      @ViewChild(MatSidenav)
      sidenav!: MatSidenav;
  constructor(private _pharmacienService:PharmacienService, private route:Router) { }

  ngOnInit(): void {
    const currentUser = this._pharmacienService.getCurrentUser();
    const query = { owner : currentUser.email };

    console.log(JSON.stringify(query));
    this._pharmacienService.getListtech(query).subscribe(
      resp => {
        this.techniciens = resp.techniciens;
      }
      
    )
    console.log(JSON.stringify(this.techniciens));


    this._pharmacienService.getOneOrdo(this.route.url.slice(-24)).subscribe(data=>{
      this.medecin=data['result']['medecin'];
      this.email=data['result']['email'];
      this.listp=data['result']['listp'];
      this.technicien=data['result']['technicien'];
      this.priseencharge=data['result']['priseencharge'];
    })
  }
  update(){
    this._pharmacienService.affectordo(this.route.url.slice(-24),{
     
'technicien':this.technicien
}).subscribe(data=>{

    })

    this._pharmacienService.affectstatus(this.technicien).subscribe(
      resp =>{        
       console.log("check disponibilite");
      // this.route.navigate(['/Listdestechniciens'])

      }
    )
    this.route.navigate(['/Listdesordonnances']);

  }
  getdispo(email){
    
    
    this._pharmacienService.affectstatus(email).subscribe(
      resp =>{        
       console.log("check disponibilite");
      // this.route.navigate(['/Listdestechniciens'])

      }
    )

  
  }
  onLogOut(){
    this._pharmacienService.logOut();
   // this.route.navigate(['/login']);
    return false;
  }
}
