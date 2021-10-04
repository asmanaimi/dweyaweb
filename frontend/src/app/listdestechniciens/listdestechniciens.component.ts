import { Router, UrlSegment } from '@angular/router';
import { Component,ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PharmacienService } from '../service/pharmacien.service';

@Component({
  selector: 'app-listdestechniciens',
  templateUrl: './listdestechniciens.component.html',
  styleUrls: ['./listdestechniciens.component.css']
})
export class ListdestechniciensComponent implements OnInit {
  @ViewChild(MatSidenav)
sidenav!: MatSidenav;
techCount: number;
  techniciens: any=[];
  ordonnances: any=[];
//  technicien:String;
nbrordotraite:String;
email:String;

  constructor(private _pharmacienService:PharmacienService, private route:Router) {   }

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

   // this._loadUsersCount();

  }
  
  
  navigateToEdit(id){
    this.route.navigate(['/edittech/'+id])
  }
  deletetech(technicienId){
    if(confirm("Are you sure to delete this tech ")) {
    
    this._pharmacienService.deletetech(technicienId).subscribe(
      resp =>{        
       console.log("technicien deleted");
       this.route.navigate(['/Listdestechniciens']);

      }

    )

  }

  }



  countordo(){
    this._pharmacienService.count(this.route.url.slice(-24),{
     
'nbrordotraite':this.nbrordotraite
}).subscribe(data=>{

    })
  //  this.route.navigate(['/Listdesordonnances']);

  }
  

  onLogOut(){
    this._pharmacienService.logOut();
   // this.route.navigate(['/login']);
    return false;
  }

  counttech(technicien){
   
    
    this._pharmacienService.getUserCount(technicien).subscribe(
      resp =>{        
      
       this.techCount = resp.techCount;
       console.log("technicien count added" +this.techCount);

       this.route.navigate(['/Listdestechniciens']);

      }

    )

  

  }
}