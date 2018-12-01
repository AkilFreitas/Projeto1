import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDejogadoresComponent } from './lista-dejogadores.component';

describe('ListaDejogadoresComponent', () => {
  let component: ListaDejogadoresComponent;
  let fixture: ComponentFixture<ListaDejogadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDejogadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDejogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
