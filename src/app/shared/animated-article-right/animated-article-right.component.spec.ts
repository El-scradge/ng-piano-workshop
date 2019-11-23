import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArticleRightComponent } from './animated-article-right.component';

describe('AnimatedArticleRightComponent', () => {
  let component: AnimatedArticleRightComponent;
  let fixture: ComponentFixture<AnimatedArticleRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedArticleRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedArticleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
