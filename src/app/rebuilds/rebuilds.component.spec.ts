import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuildsComponent } from './rebuilds.component';

describe('RebuildsComponent', () => {
  let component: RebuildsComponent;
  let fixture: ComponentFixture<RebuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
