import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsClienteComponent } from './es-cliente.component';

describe('EsClienteComponent', () => {
  let component: EsClienteComponent;
  let fixture: ComponentFixture<EsClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
