import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioLancamentosComponent } from './relatorio-lancamentos.component';

describe('RelatorioLancamentosComponent', () => {
  let component: RelatorioLancamentosComponent;
  let fixture: ComponentFixture<RelatorioLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
