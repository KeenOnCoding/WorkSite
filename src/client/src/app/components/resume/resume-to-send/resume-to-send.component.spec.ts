import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeToSendComponent } from './resume-to-send.component';

describe('ResumeToSendComponent', () => {
  let component: ResumeToSendComponent;
  let fixture: ComponentFixture<ResumeToSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeToSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeToSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
