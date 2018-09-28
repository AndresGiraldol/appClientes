import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoClienteComponent } from './no-cliente.component';

describe('NoClienteComponent', () => {
  let component: NoClienteComponent;
  let fixture: ComponentFixture<NoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
