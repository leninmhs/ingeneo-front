import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../rest.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy{
	title = 'INGENEO';
	
	public listaClientes:any = [];

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
		this.RestService.get('http://localhost/ingeneo/web/index.php?r=api/clientes')
		.subscribe(respuesta =>{
		//console.log(respuesta);
		this.listaClientes = respuesta;
		//this.dtTrigger.next();
		//this.listdePeliculas.next();
		})
		
	}
	
	

}

