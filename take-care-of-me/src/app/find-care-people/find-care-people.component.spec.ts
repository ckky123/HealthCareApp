import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCarePeopleComponent } from './find-care-people.component';

describe('FindCarePeopleComponent', () => {
  let component: FindCarePeopleComponent;
  let fixture: ComponentFixture<FindCarePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCarePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCarePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
