import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonformComponent } from './hackathonform.component';

describe('HackathonformComponent', () => {
  let component: HackathonformComponent;
  let fixture: ComponentFixture<HackathonformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
