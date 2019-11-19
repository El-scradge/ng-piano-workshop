import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArticleComponent } from './animated-article.component';

describe('AnimatedArticleComponent', () => {
  let component: AnimatedArticleComponent;
  let fixture: ComponentFixture<AnimatedArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
