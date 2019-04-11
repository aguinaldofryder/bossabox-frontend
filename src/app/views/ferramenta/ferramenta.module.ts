import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerramentaRoutingModule } from './ferramenta.routing';
import { FerramentaPesquisaComponent } from './pesquisa/ferramenta-pesquisa.component';

@NgModule({
  declarations: [FerramentaPesquisaComponent],
  imports: [
    CommonModule,
    
    FerramentaRoutingModule
  ]
})
export class FerramentaModule { }
