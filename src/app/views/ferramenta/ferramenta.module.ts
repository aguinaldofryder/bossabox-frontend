import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FerramentaRoutingModule } from './ferramenta.routing';
import { FerramentaService } from './ferramenta.service';
import { FerramentaFormularioComponent } from './formulario/ferramenta-formulario.component';
import { FerramentaPesquisaComponent } from './pesquisa/ferramenta-pesquisa.component';

@NgModule({
  declarations: [
    FerramentaPesquisaComponent,
    FerramentaFormularioComponent
  ],
  entryComponents: [
    FerramentaFormularioComponent
  ],
  imports: [
    CommonModule,

    FerramentaRoutingModule,
    SharedModule
  ],
  providers: [
    FerramentaService
  ]
})
export class FerramentaModule { }
