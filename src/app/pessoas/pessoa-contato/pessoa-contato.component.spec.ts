import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaContatoComponent } from './pessoa-contato.component';

describe('PessoaContatoComponent', () => {
  let component: PessoaContatoComponent;
  let fixture: ComponentFixture<PessoaContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
