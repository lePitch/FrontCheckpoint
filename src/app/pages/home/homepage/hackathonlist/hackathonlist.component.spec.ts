import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonlistComponent } from './hackathonlist.component';

describe('HackathonlistComponent', () => {
  let component: HackathonlistComponent;
  let fixture: ComponentFixture<HackathonlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
