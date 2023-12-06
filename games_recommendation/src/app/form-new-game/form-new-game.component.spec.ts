import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewGameComponent } from './form-new-game.component';

describe('FormNewGameComponent', () => {
  let component: FormNewGameComponent;
  let fixture: ComponentFixture<FormNewGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewGameComponent]
    });
    fixture = TestBed.createComponent(FormNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
