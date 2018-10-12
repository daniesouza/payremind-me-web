import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasNovoComponent } from './pessoas-novo.component';

describe('PessoasNovoComponent', () => {
  let component: PessoasNovoComponent;
  let fixture: ComponentFixture<PessoasNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
