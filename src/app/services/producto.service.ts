import { Injectable, Service } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({providedIn:'root'})
export class ProductoService {
    listaProductos:Producto[] = []
    registrarProducto(producto:Producto):void{
        this.listaProductos.push(producto)
        console.log("Producto guardado correctamente.", producto);
    }

    listarProductos():Producto[]{
        return this.listaProductos;
    }
}
