import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatchComponent } from './seatch.component';

describe('SeatchComponent', () => {
  let component: SeatchComponent;
  let fixture: ComponentFixture<SeatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
