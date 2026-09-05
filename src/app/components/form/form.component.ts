import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-form',
  styleUrl: './form.component.css',
  templateUrl: './form.component.html',
})
export class FormComponent {
  formularioProducto:FormGroup;
  constructor(private formBuilder: FormBuilder, private productoService: ProductoService, private router:Router) {
    this.formularioProducto = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
      descripcion: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(120)]],
      precio: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      stock: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]],
      categoria: ['', [Validators.required]]
    })

  }

  onSubmit() {
    if (this.formularioProducto.valid) {
      this.productoService.registrarProducto(this.formularioProducto.value);
      console.table(this.formularioProducto.value);
      this.formularioProducto.reset();
      this.router.navigate(['/lista-productos'])
    } else {
      console.log("Formulario inválido, ingrese nuevamente los datos.")
      this.formularioProducto.markAllAsTouched();
    }
  }
}