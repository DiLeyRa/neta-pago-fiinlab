import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSalidaComponent } from './boton-salida.component';

describe('BotonSalidaComponent', () => {
  let component: BotonSalidaComponent;
  let fixture: ComponentFixture<BotonSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
