import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosNovoComponent } from './lancamentos-novo.component';

describe('LancamentosNovoComponent', () => {
  let component: LancamentosNovoComponent;
  let fixture: ComponentFixture<LancamentosNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
