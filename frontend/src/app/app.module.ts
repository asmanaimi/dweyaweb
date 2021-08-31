import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListdestechniciensComponent } from './listdestechniciens/listdestechniciens.component';
import { ListdesordonnancesComponent } from './listdesordonnances/listdesordonnances.component';
import { AjoutertechComponent } from './ajoutertech/ajoutertech.component';
import { EdittechComponent } from './edittech/edittech.component';
import { PharmacienService } from './service/pharmacien.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuard } from './guards/auth.guard';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { RegisterComponent } from './register/register.component';
import { AffectordoComponent } from './affectordo/affectordo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcceuilComponent,
    ListdestechniciensComponent,
    ListdesordonnancesComponent,
    AjoutertechComponent,
    EdittechComponent,
    RegisterComponent,
    AffectordoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule 
     
  ],
  providers: [

    PharmacienService,
    AuthGuard
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
