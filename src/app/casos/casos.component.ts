import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../rest.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit, OnDestroy{
	public listaCasos:any = [];
  dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();

  constructor(private RestService:RestService){
	
	}


	ngOnInit(): void{
		this.cargarData();
	}
	
	ngOnDestroy(): void {
		//this.dtTrigger.unsubscribe();
		//this.cargarData().unsubscribe();
		//this.cargarData();
	}
	  
	public cargarData(){
		this.RestService.get('http://localhost/ingeneo/web/index.php?r=api/casos')
		.subscribe(respuesta =>{
		//console.log(respuesta);
		this.listaCasos = respuesta;
		//this.dtTrigger.next();
		//this.listdePeliculas.next();
		})
		
	}

}
