import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginalosasesinosdelalunaComponent } from './pagina-losasesinosdelaluna.component';

describe('PaginalosasesinosdelalunaComponent', () => {
  let component: PaginalosasesinosdelalunaComponent;
  let fixture: ComponentFixture<PaginalosasesinosdelalunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginalosasesinosdelalunaComponent]
    });
    fixture = TestBed.createComponent(PaginalosasesinosdelalunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});