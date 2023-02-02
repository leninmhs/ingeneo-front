import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string;
  clave: string;
  public mensajeexitoso: any = [];
  public mensajefallido: any = [];

	public listdePeliculas:any = [];

  //constructor() {}
	constructor(private RestService:RestService, private router: Router){ }

  
  login() {
    this.mensajeexitoso='';
    this.mensajefallido='';
    if((this.usuario !== undefined && this.clave !== undefined) && (this.usuario !== "" && this.clave !== "")){
      this.RestService.get('http://localhost/ingeneo/web/index.php?r=api/autenticar-front&user='+this.usuario+'&clave='+this.clave+'')
      .subscribe(respuesta =>{
      console.log(respuesta);
      this.listdePeliculas = respuesta;
      //this.mensaje = respuesta;
      if(respuesta==='SI'){
        this.mensajeexitoso='Login exitoso.';
        //await new Promise(f => setTimeout(f, 1000));
        //this.router.navigate(['/casos']);
        setTimeout(() => { this.router.navigate(['/clientes']); },5000);
        //this.router.navigateByUrl('/casos/');

        //this.router.navigate(['/casos']).then(()=> window.location.reload());   
      }else{
        this.mensajefallido='Login fallo, por favor valide los datos';
      }
    
      //this.dtTrigger.next();
      //this.listdePeliculas.next();
      })
    }else{
      this.mensajefallido='Verifique sus por favor.';
    }
      //this.mensaje='Botón pulsado';
      //if(this.respuesta=='SI'){this.mensaje='Login exitoso.';}else{this.mensaje='Login fallo, por favor valide los datos';}

    console.log(this.usuario);
    console.log(this.clave);
  }//fin login

  ngOnInit() {
  }
  
  onClick(){
    console.log("Botón pulsado");
  }


}//fin export
