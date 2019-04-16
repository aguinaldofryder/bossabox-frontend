import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ToolModel } from 'src/app/models/tool';
import { OpenDialogService } from 'src/app/shared/components/show-dialog/open-dialog.service';
import { FormularioUnsubscribeUtil } from 'src/app/shared/formulario/form-unsubscribe-util';
import { FerramentaService } from '../ferramenta.service';
import { FerramentaFormularioComponent } from '../formulario/ferramenta-formulario.component';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-ferramenta-pesquisa',
  templateUrl: './ferramenta-pesquisa.component.html',
  styleUrls: ['./ferramenta-pesquisa.component.scss']
})
export class FerramentaPesquisaComponent extends FormularioUnsubscribeUtil implements OnInit {

  /**
   * Lista de ferramentas
   */
  tools: ToolModel[] = [];

  /**
   * Controle do campo de busca
   */
  controlSearch: FormControl = new FormControl('');

  /**
   * Controle do checkbox de busca por tag
   */
  controlSearchTab: FormControl = new FormControl(false);

  constructor(
    private service: FerramentaService,
    private dialog: MatDialog,
    private openDialogService: OpenDialogService
  ) { 
    super();
  }

  ngOnInit() {
    this.initData();
    this.controlSearch.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      ).subscribe(() => {
      this.search();
    })
  }

  /**
   * Adiciona ferramenta
   * 
   * @param tool 
   */
  addTool(tool: ToolModel) {
    this.dialog.open(FerramentaFormularioComponent, {
      width: '400px'
    }).afterClosed().pipe(takeUntil(this.unsubscribe)).subscribe(() => this.initData())
  }

  /**
   * Busca dados no servidor
   */
  initData(): void {
    this.service.getTools()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((tools: ToolModel[]) => this.tools = tools);
  }

  /**
   * Exclui uma ferramenta
   */
  remove(id: number) {
    this.openDialogService.showConfirmDialog('Are you sure you want to remove item?', 'Remove tool').subscribe((dialogResult: boolean) => {
      if (dialogResult) {
        this.service.remove(id).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
          this.initData()
          this.openDialogService.showMessageDialog('Item successfully removed', 'Success');
        });
      }
    })
  }

  /**
   * Pesquisa per título ou tag
   */
  search() {
    if (this.controlSearchTab.value) {
      this.service.searchByTag(this.controlSearch.value).pipe(takeUntil(this.unsubscribe)).subscribe((result: ToolModel[]) => this.tools = result);
    } else {
      this.service.searchByTitle(this.controlSearch.value).pipe(takeUntil(this.unsubscribe)).subscribe((result: ToolModel[]) => this.tools = result);
    }
  }

}
