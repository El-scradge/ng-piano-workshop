import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArticleImagedComponent } from './animated-article-imaged.component';

describe('AnimatedArticleImagedComponent', () => {
  let component: AnimatedArticleImagedComponent;
  let fixture: ComponentFixture<AnimatedArticleImagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedArticleImagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedArticleImagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
