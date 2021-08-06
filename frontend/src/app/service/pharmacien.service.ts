import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import * as AppUtil from '../common/app.util';
@Injectable({
  providedIn: 'root'
})
export class PharmacienService {

baseUri:string='http://192.168.1.7:3000';

headers=new HttpHeaders().set('content-Type','applictaion/json');

constructor(private http:HttpClient,public router:Router) { }

login(admin):Observable<any>{
  let url=`${this.baseUri}/pharmaciens/auth`;
  return this.http.post(url,admin).pipe(catchError(this.errorMgmt))
}
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);


  
}

/*
 
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
    addtechnicien(technicien):Observable<any>{
      let url=`${this.baseUri}/pharmaciens/add`;
      return this.http.post(url,technicien).pipe(catchError(this.errorMgmt))
    }
   
    getListtech(): Observable<any>{
      return this.http.get(`${this.baseUri}/pharmaciens/listtech`);
    }
        
   
    getOneTech(id){
      let url = `${this.baseUri}/pharmaciens/gettech`;
      return this.http.post(url,{"_id":id});
    }
   
*/
deletetech(technicienID):Observable<any>{
  let url=`${this.baseUri}/pharmaciens/deletetech/${technicienID}`;
  return this.http.delete(url).pipe(catchError(this.errorMgmt))

}

updatetech(id, data): Observable<any> {
  let url = `${this.baseUri}/pharmaciens/updatetech/${id}`;
  return this.http.put(url, {...data})
}
getListtech(query):Observable<any>{
  let url=`${this.baseUri}/pharmaciens/list`;
  return this.http.post(url,query).pipe(catchError(this.errorMgmt));
}
getListOrdo(query):Observable<any>{
  let url=`${this.baseUri}/pharmaciens/listordo`;
  return this.http.post(url,query).pipe(catchError(this.errorMgmt));
}
getOneTech(id){
  let url = `${this.baseUri}/pharmaciens/gettech`;
  return this.http.post(url,{"_id":id});
}
register(pharmacien):Observable<any>{
  let url=`${this.baseUri}/pharmaciens/registerpharma`;
  return this.http.post(url,pharmacien).pipe(catchError(this.errorMgmt))
}

//store token
saveUserDate(token,pharmacien) {
  localStorage.setItem(AppUtil.AUTH_TOKEN, token);
  localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(pharmacien));
}
isLoggedIn() :boolean {
 //just for check token exist
  return !!localStorage.getItem(AppUtil.AUTH_TOKEN);
}

logOut() {
  localStorage.removeItem(AppUtil.AUTH_TOKEN);
  localStorage.removeItem(AppUtil.USER_INFO);
  this.router.navigateByUrl('/login')
}

getCurrentUser() {
  return JSON.parse(localStorage.getItem(AppUtil.USER_INFO));
}
addtechnicien(technicien):Observable<any>{
  let url=`${this.baseUri}/pharmaciens/registertech`;
  return this.http.post(url,technicien).pipe(catchError(this.errorMgmt))
}
  }