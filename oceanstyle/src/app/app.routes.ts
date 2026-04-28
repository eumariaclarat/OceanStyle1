import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Biquinis } from './biquinis/biquinis';
import { Acessorios } from './acessorios/acessorios';
import { Roupas } from './roupas/roupas';

export const routes: Routes = [
    {path:'inicio',component:Inicio},
    {path:'biquinis',component:Biquinis},
    {path:'roupas',component:Roupas},
    {path:'acessorios',component:Acessorios}
];
