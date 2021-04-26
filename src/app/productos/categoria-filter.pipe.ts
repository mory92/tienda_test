import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../producto';

@Pipe({
    name: 'categoriasFilter'
})

export class CategoriasFilterPipe implements PipeTransform{
    transform(productos: Producto[], searchTerm2: string): Producto[]{
        if(!productos || !searchTerm2){
            return productos;
        }
        return productos.filter(productos =>
            productos.categoria.toLowerCase().indexOf(searchTerm2.toLowerCase()) !== -1);
    }
}