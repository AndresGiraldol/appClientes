import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbreCuentaComponent } from './abre-cuenta.component';

describe('AbreCuentaComponent', () => {
  let component: AbreCuentaComponent;
  let fixture: ComponentFixture<AbreCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbreCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbreCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
