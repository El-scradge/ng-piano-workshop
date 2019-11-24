import {Component, Input, OnInit} from '@angular/core';
import {loadTriggerLeft} from "../animations/main.animations";
import {ModalService} from "../modal/modal.service";
import {FormAddArticleComponent} from "../forms/form-add-article/form-add-article.component";
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-animated-article-left',
  templateUrl: './animated-article-left.component.html',
  styleUrls: ['./animated-article-left.component.scss'],
  animations: [loadTriggerLeft]
})
export class AnimatedArticleLeftComponent implements OnInit {

  type;
  @Input() article;
  constructor(
    private modal: ModalService,
    private articleService: ArticlesService
  ) {


  }

  ngOnInit() {
    this.type = this.article.type;
  }

  editArticle() {
    this.modal.open(FormAddArticleComponent, {data: {title: 'Edit Article', content: this.article, type: this.type}})
      .afterClosed.subscribe( response => {
      this.articleService.saveArticlesPolishing(response);
    });
  }

}
