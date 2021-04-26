import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../producto';

@Pipe({
    name: 'productosFilter'
})

export class ProductosFilterPipe implements PipeTransform{
    transform(productos: Producto[], searchTerm: string): Producto[]{
        if(!productos || !searchTerm){
            return productos;
        }
        return productos.filter(productos =>
            productos.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}