import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from '../app-routing.module';
import { AnimatedArticleImagedComponent } from './animated-article-imaged/animated-article-imaged.component';
import { AnimatedArticleComponent } from './animated-article/animated-article.component';



@NgModule({
  declarations: [NavComponent, FooterComponent, AnimatedArticleImagedComponent, AnimatedArticleComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
    exports: [
        NavComponent, FooterComponent, AnimatedArticleComponent
    ]
})
export class SharedModule { }
