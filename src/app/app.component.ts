import {Component, OnInit} from '@angular/core';
import {CarritoService} from "./carrito.service";
import {DataSharingService} from "./data-sharing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular-node';
  public productos = [];
  admin: boolean = false;

  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje == "car_updated") {
        this.refrescarCarrito();
      }
    })
  }

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
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
  }


}
