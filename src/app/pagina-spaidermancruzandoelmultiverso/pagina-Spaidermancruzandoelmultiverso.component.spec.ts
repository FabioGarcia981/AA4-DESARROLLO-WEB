import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSpaidermancruzandoelmultiversoComponent } from './pagina-Spaidermancruzandoelmultiverso.component';

describe('PaginaSpaidermancruzandoelmultiversoComponent', () => {
  let component: PaginaSpaidermancruzandoelmultiversoComponent;
  let fixture: ComponentFixture<PaginaSpaidermancruzandoelmultiversoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaSpaidermancruzandoelmultiversoComponent]
    });
    fixture = TestBed.createComponent(PaginaSpaidermancruzandoelmultiversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});