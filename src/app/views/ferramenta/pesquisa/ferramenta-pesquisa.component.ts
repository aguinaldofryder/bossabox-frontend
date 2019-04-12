import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToolModel } from 'src/app/models/tool';
import { FerramentaService } from '../ferramenta.service';
import { FerramentaFormularioComponent } from '../formulario/ferramenta-formulario.component';

@Component({
  selector: 'app-ferramenta-pesquisa',
  templateUrl: './ferramenta-pesquisa.component.html',
  styleUrls: ['./ferramenta-pesquisa.component.scss']
})
export class FerramentaPesquisaComponent implements OnInit {

  /**
   * Lista de ferramentas
   */
  tools: ToolModel[] = [];


  constructor(
    private service: FerramentaService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.service.getTools().subscribe((tools: ToolModel[]) => this.tools = tools);
  }

  addTool(tool: ToolModel) {
    console.log('Chamou click')
    this.dialog.open(FerramentaFormularioComponent, {
      width: '400px'
    })
  }

}
