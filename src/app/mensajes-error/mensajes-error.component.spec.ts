import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesErrorComponent } from './mensajes-error.component';

describe('MensajesErrorComponent', () => {
  let component: MensajesErrorComponent;
  let fixture: ComponentFixture<MensajesErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
