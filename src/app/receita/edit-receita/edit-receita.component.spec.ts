import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceitaComponent } from './edit-receita.component';

describe('EditReceitaComponent', () => {
  let component: EditReceitaComponent;
  let fixture: ComponentFixture<EditReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditReceitaComponent]
    });
    fixture = TestBed.createComponent(EditReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
