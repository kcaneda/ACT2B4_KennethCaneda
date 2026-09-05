import { Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { FormComponent } from './components/form/form.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'lista-productos', pathMatch:'full'
    },
    {
        path:'lista-productos', component:ListaComponent
    },
    {
        path:'formulario-producto', component:FormComponent
    },
    {
        path:'**', component:NoEncontradoComponent
    }
];
