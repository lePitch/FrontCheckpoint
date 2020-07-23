import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamformComponent } from './teamform.component';

describe('TeamformComponent', () => {
  let component: TeamformComponent;
  let fixture: ComponentFixture<TeamformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
