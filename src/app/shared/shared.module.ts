import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from '../app-routing.module';
import { AnimatedArticleImagedComponent } from './animated-article-imaged/animated-article-imaged.component';
import { AnimatedArticleComponent } from './animated-article/animated-article.component';
import {ModalModule} from './modal/modal.module';
import { FormAddArticleComponent } from './forms/form-add-article/form-add-article.component';
import {ModalService} from "./modal/modal.service";
import {FormsModule} from "@angular/forms";
import { AnimatedArticleLeftComponent } from './animated-article-left/animated-article-left.component';
import { AnimatedArticleRightComponent } from './animated-article-right/animated-article-right.component';



@NgModule({
  declarations: [NavComponent,
    FooterComponent,
    AnimatedArticleImagedComponent,
    AnimatedArticleComponent,
    FormAddArticleComponent,
    AnimatedArticleLeftComponent,
    AnimatedArticleRightComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModalModule,
    FormsModule
  ],
    exports: [
      NavComponent,
      FooterComponent,
      AnimatedArticleLeftComponent,
      AnimatedArticleRightComponent,
      ModalModule
    ],
  providers: [ModalService],
  entryComponents: [FormAddArticleComponent]
})
export class SharedModule { }
