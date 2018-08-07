import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeCarePeopleComponent } from './be-care-people.component';

describe('BeCarePeopleComponent', () => {
  let component: BeCarePeopleComponent;
  let fixture: ComponentFixture<BeCarePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeCarePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeCarePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
