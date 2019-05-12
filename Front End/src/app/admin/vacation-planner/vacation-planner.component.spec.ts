import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPlannerComponent } from './vacation-planner.component';

describe('VacationPlannerComponent', () => {
  let component: VacationPlannerComponent;
  let fixture: ComponentFixture<VacationPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
