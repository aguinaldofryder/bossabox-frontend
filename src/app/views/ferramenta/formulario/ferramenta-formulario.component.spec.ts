import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentaFormularioComponent } from './ferramenta-formulario.component';

describe('FerramentaFormularioComponent', () => {
  let component: FerramentaFormularioComponent;
  let fixture: ComponentFixture<FerramentaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerramentaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerramentaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
