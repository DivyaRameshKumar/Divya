import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformlistComponent } from './studentformlist.component';

describe('StudentformlistComponent', () => {
  let component: StudentformlistComponent;
  let fixture: ComponentFixture<StudentformlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentformlistComponent]
    });
    fixture = TestBed.createComponent(StudentformlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
