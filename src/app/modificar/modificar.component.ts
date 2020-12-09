import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  url = 'https://apifacturas.herokuapp.com/';
  nombreCliente : string;
  rnc : string;
  fecha : string;
  descripcion : string;
  codigo : string;
  nombreArticulo : string;
  precio : string;
  cantidad : string;
  subtotal : string;
  itbis : string;
  total : string;
  t:any;

  constructor(private http: HttpClient) { }
  modificar (){
    this.http.get(this.url+this.nombreCliente+"/"+this.rnc+"/"+this.fecha+"/"+this.descripcion+"/"+this.codigo+"/"+this.nombreArticulo+"/"+this.precio+"/"+this.cantidad+"/"+this.subtotal+"/"+this.itbis+"/"+this.total+"")
    .subscribe(r => {
      this.t = r;
      console.log(this.t);
      alert("Datos registrados correctamente")
    })
  }
  ngOnInit(): void {
  }

}
