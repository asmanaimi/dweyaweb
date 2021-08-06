import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacienService } from '../service/pharmacien.service';

@Component({
  selector: 'app-listdestechniciens',
  templateUrl: './listdestechniciens.component.html',
  styleUrls: ['./listdestechniciens.component.css']
})
export class ListdestechniciensComponent implements OnInit {
  techniciens: any=[];
//owner:String;
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

  }
  
  navigateToEdit(id){
    this.route.navigate(['/edittech/'+id])
  }
  deletetech(technicienId){
    if(confirm("Are you sure to delete this tech ")) {
    
    this._pharmacienService.deletetech(technicienId).subscribe(
      resp =>{        
       console.log("technicien deleted");
       this.route.navigate(['/Listdestechniciens'])

      }
    )

  }

  }



}