import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehackathonComponent } from './createhackathon.component';

describe('CreatehackathonComponent', () => {
  let component: CreatehackathonComponent;
  let fixture: ComponentFixture<CreatehackathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatehackathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
