import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMariobrosComponent } from './pagina-Oppenheimer.component';

describe('PaginaOppenheimerComponent', () => {
  let component: PaginaOppenheimerComponent;
  let fixture: ComponentFixture<PaginaOppenheimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaOppenheimerComponent]
    });
    fixture = TestBed.createComponent(PaginaOppenheimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});