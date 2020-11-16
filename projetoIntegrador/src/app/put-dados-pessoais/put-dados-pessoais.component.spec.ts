import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDadosPessoaisComponent } from './put-dados-pessoais.component';

describe('PutDadosPessoaisComponent', () => {
  let component: PutDadosPessoaisComponent;
  let fixture: ComponentFixture<PutDadosPessoaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutDadosPessoaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutDadosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
