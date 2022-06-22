import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore: AngularFirestore) { }

  getEmployee(){

    return this.firestore.collection("employees").snapshotChanges();
   }
   getProyect(){
    return this.firestore.collection("proyectos").snapshotChanges();
  }
   
   getEmployeeId(id:number){
     
   }
   
   createEmployee(employee:any){
   return this.firestore.collection("employees").add(employee);
   }

   createProyecto(proyect:any){
    return this.firestore.collection("proyectos").add(proyect);
   }
   updateEmployee(id:any, employee:any){
     return this.firestore.collection("employees").doc(id).update(employee)
   }
   
   deleteEmployee(id:any){
     return this.firestore.collection("employees").doc(id).delete();
   }
   
}
