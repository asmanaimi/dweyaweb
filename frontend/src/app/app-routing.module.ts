import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HomeComponent } from './home/home.component';
import { ListdestechniciensComponent } from './listdestechniciens/listdestechniciens.component';
import { ListdesordonnancesComponent } from './listdesordonnances/listdesordonnances.component';
import { AjoutertechComponent} from './ajoutertech/ajoutertech.component';
import { EdittechComponent} from './edittech/edittech.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'register',component:RegisterComponent} ,
    {path:'login',component:HomeComponent} ,
    {path:'Acceuil',component:AcceuilComponent , canActivate: [AuthGuard]} ,
    {path:'Listdestechniciens',component:ListdestechniciensComponent,canActivate: [AuthGuard]} ,
    {path:'Listdesordonnances',component:ListdesordonnancesComponent,canActivate: [AuthGuard]} ,
    {path:'Ajouter technicien',component:AjoutertechComponent,canActivate: [AuthGuard]} ,
    {path:'edittech/:id',component:EdittechComponent,canActivate: [AuthGuard]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
