import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeUniformeComponent } from './lista-de-uniforme.component';

describe('ListaDejogadoresComponent', () => {
  let component: ListaDeUniformeComponent;
  let fixture: ComponentFixture<ListaDeUniformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeUniformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeUniformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
