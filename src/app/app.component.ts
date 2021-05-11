import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CarritoService} from "./carrito.service";
import {DataSharingService} from "./data-sharing.service";
import {ProductosService} from "./productos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Animal Crew';
  public productos = [];
  public productos2 = [];
  public productos3 = [];
  admin: boolean = false;

  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService, private productoService: ProductosService) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje == "car_updated") {
        this.refrescarCarrito();
      }
    })
  }

  public openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  public ordenar(){
    this.closeNav();
  }

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
  }

  public async dameProductos(){
    this.productos2 = await this.productoService.obtenerProductos();
    let result = this.productos2.filter((item,index)=>{
      return this.productos2.indexOf(item) === index;
    })
    console.log("OJO A ESTO--> " + JSON.stringify(result));

    const dataArr = new Set(this.productos2);

    let result2 = [...dataArr];
    console.log("OJO A ESTO 2--> " + JSON.stringify(result2));
  }

  public total() {
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }

  public login(){
    this.admin = true;
  }

  public logout(){
    this.admin = false;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
    this.dameProductos();
  }


}
