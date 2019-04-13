import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToolModel } from 'src/app/models/tool';
import { FerramentaService } from '../ferramenta.service';
import { FerramentaFormularioComponent } from '../formulario/ferramenta-formulario.component';
import { OpenDialogService } from 'src/app/shared/components/show-dialog/open-dialog.service';

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
    private dialog: MatDialog,
    private openDialogService: OpenDialogService
  ) { }

  ngOnInit() {
    this.initData();
  }

  addTool(tool: ToolModel) {
    console.log('Chamou click')
    this.dialog.open(FerramentaFormularioComponent, {
      width: '400px'
    }).afterClosed().subscribe(() => this.initData())
  }

  /**
   * Exclui uma ferramenta
   */
  remove(id: number) {
    this.openDialogService.showConfirmDialog('Are you sure you want to remove item?', 'Remove tool').subscribe((dialogResult: boolean) => {
      if (dialogResult) {
        this.service.remove(id).subscribe(() => this.initData());
      }
    })
  }

  /**
   * Busca dados no servidor
   */
  initData(): void {
    this.service.getTools().subscribe((tools: ToolModel[]) => this.tools = tools);
  }

}
