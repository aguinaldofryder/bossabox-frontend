import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentaPesquisaComponent } from './ferramenta-pesquisa.component';

describe('FerramentaPesquisaComponent', () => {
  let component: FerramentaPesquisaComponent;
  let fixture: ComponentFixture<FerramentaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerramentaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerramentaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
