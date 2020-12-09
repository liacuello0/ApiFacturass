import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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

  registros (){
    this.http.get(this.url+this.nombreCliente+"/"+this.rnc+"/"+this.fecha+"/"+this.descripcion+"/"+this.codigo+"/"+this.nombreArticulo+"/"+this.precio+"/"+this.cantidad+"/"+this.subtotal+"/"+this.itbis+"/"+this.total+"")
    .subscribe(r => {
      this.t = r;
      console.log(this.t);
      alert("Datos registrados correctamente")
    })
  }

  registro (){
    this.http.get("/registrar/"+this.nombreCliente+"/"+this.rnc+"/"+this.fecha+"/"+this.descripcion+"/"+this.codigo+"/"+this.nombreArticulo+"/"+this.precio+"/"+this.cantidad+"/"+this.subtotal+"/"+this.itbis+"/"+this.total+"")
    .subscribe(r => {
      this.t = r;
      console.log(this.t);
      alert("Datos registrados correctamente")
    })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
