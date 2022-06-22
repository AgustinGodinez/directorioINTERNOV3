import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  closeResult = '';
  employeeForm:FormGroup;
  proyectForm: FormGroup;
  employeeStatus:FormGroup;
  employeeProyecto: FormGroup;
  idFirebaseActualizar:string;
  idFirebaseActualizarSatus: String;
  actualizar:boolean;

  constructor(public modalService: NgbModal, public fb:FormBuilder, private firebaseServiceService:FirebaseServiceService,) { }

  filterPost = '';
    config:any;
     
    collection={count:0, data:[]}
   
    /*Configuracion para mostrar proyectos */
   
     configProyect:any;
     collection2 = {count2:0, data2:[]}
   
     ngOnInit(): void {
       this.idFirebaseActualizar="";
       this.actualizar=false;
       
   this.config = {
        itemsPerPage:5,
        currentPage:1,
        totalItems:this.collection.data.length
      };
   
      this.configProyect = {
       itemsPerPage2:5,
       currentPage2:1,
       totalItems2:this.collection2.data2.length
     };
   
       this.employeeForm = this.fb.group({
           id:['',Validators.required],
           nombre:['', Validators.required],
           apellido:['', Validators.required],
           correoPersonal:['', Validators.required],
           correoCorporativo: ['', Validators.required],
           telefono: ['',Validators.required],
           fecha_nacimiento:['', Validators.required],
           proyecto_asignado:['', Validators.required],
           fecha_incorporacion:['', Validators.required],
           fecha_baja:['', Validators.required],
           responsable_directo:['', Validators.required],
           activo:['', Validators.required],
   
       });
   
       this.employeeStatus = this.fb.group({
         activo:['', Validators.required],
   
     });
   
      this.employeeProyecto = this.fb.group({
         proyecto_asignado:['', Validators.required]
      })
   
      this.proyectForm = this.fb.group({
       proyecto_asignado2:['', Validators.required]
    })
   
   
   
   //Obtener los valores 
   this.firebaseServiceService.getEmployee().subscribe(resp=>{
    this.collection.data = resp.map((e:any) =>{
      return{
       id:e.payload.doc.data().id,
       nombre:e.payload.doc.data().nombre,
       apellido:e.payload.doc.data().apellido,
       correoPersonal: e.payload.doc.data().correoPersonal,
       correoCorporativo: e.payload.doc.data().correoCorporativo,
       telefono:e.payload.doc.data().telefono,
       fecha_nacimiento:e.payload.doc.data().fecha_nacimiento,
       proyecto_asignado:e.payload.doc.data().proyecto_asignado,
       fecha_incorporacion:e.payload.doc.data().fecha_incorporacion,
       fecha_baja:e.payload.doc.data().fecha_baja,
       responsable_directo:e.payload.doc.data().responsable_directo,
       activo:e.payload.doc.data().activo,
       idFirebase:e.payload.doc.id,
      }
    })
   },
    error=>{
      console.error(error)
    }
   );
   
   
   this.firebaseServiceService.getProyect().subscribe(resp =>{  
      this.collection2.data2 = resp.map((a:any) =>{
       return{
         proyecto_asignado2:a.payload.doc.data().proyecto_asignado2
       }
      })
   }, 
   error =>{
     console.log(error)
   }
   );
   
   
   
   }
   
     pageChanged(event){
       this.config.currentPage = event;
     }
    }