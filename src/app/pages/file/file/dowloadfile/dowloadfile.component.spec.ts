import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadfileComponent } from './dowloadfile.component';

describe('DowloadfileComponent', () => {
  let component: DowloadfileComponent;
  let fixture: ComponentFixture<DowloadfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowloadfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowloadfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
