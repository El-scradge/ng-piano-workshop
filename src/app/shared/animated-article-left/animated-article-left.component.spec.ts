import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArticleLeftComponent } from './animated-article-left.component';

describe('AnimatedArticleLeftComponent', () => {
  let component: AnimatedArticleLeftComponent;
  let fixture: ComponentFixture<AnimatedArticleLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedArticleLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedArticleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
