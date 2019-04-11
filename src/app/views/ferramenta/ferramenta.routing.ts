import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerramentaPesquisaComponent } from './pesquisa/ferramenta-pesquisa.component';

const routes: Routes = [
    {
        path: '',
        component: FerramentaPesquisaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FerramentaRoutingModule { }