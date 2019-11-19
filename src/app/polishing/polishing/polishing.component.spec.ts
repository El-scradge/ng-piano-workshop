import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishingComponent } from './polishing.component';

describe('PolishingComponent', () => {
  let component: PolishingComponent;
  let fixture: ComponentFixture<PolishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
