import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaCarritoComponent } from './agrega-carrito.component';

describe('AgregaCarritoComponent', () => {
  let component: AgregaCarritoComponent;
  let fixture: ComponentFixture<AgregaCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
