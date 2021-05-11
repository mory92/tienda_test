import {Component, Input, OnInit} from '@angular/core';
import {ProductosService} from "../productos.service";
import {ProductosFilterPipe} from "../productos/productos-filter.pipe";
import {CategoriasFilterPipe} from "../productos/categoria-filter.pipe";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public productos = [];

  constructor(private productosService: ProductosService) {
  }

  async ngOnInit() {
    this.productos = await this.productosService.obtenerProductosConFotos();
  }

}
