import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-lista',
  styleUrl: './lista.component.css',
  templateUrl: './lista.component.html',
})
export class ListaComponent {
  productoService = inject(ProductoService);
  productos = this.productoService.listaProductos;

  ngOnInit():void{
    this.productos = this.productoService.listarProductos();

  }
}
