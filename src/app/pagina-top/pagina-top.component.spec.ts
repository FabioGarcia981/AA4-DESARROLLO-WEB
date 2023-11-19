import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTopComponent } from './pagina-top.component';

describe('PaginaTopComponent', () => {
  let component: PaginaTopComponent;
  let fixture: ComponentFixture<PaginaTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaTopComponent]
    });
    fixture = TestBed.createComponent(PaginaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});