import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoColumnComponent } from './todo-column.component';

describe('TodoColumnComponent', () => {
  let component: TodoColumnComponent;
  let fixture: ComponentFixture<TodoColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoColumnComponent]
    });
    fixture = TestBed.createComponent(TodoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
