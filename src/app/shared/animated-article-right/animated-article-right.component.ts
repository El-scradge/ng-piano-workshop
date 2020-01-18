import {Component, Input, OnInit} from '@angular/core';
import {loadTriggerRight} from "../animations/main.animations";
import {FormAddArticleComponent} from "../forms/form-add-article/form-add-article.component";
import {ModalService} from "../modal/modal.service";
import {ArticlesService} from "../../services/articles.service";
import {EditingService} from "../../services/editing.service";

@Component({
  selector: 'app-animated-article-right',
  templateUrl: './animated-article-right.component.html',
  styleUrls: ['./animated-article-right.component.scss'],
  animations: [loadTriggerRight]
})
export class AnimatedArticleRightComponent implements OnInit {

  type;
  editMode;
  subscriptions = [];
  @Input() article;

  constructor(
      private modal: ModalService,
      private articleService: ArticlesService,
      private editService: EditingService,
  ) {
    this.subscriptions.push(this.editService.editMode.subscribe( (data) => {
      this.editMode = data;
        }
    ));
  }

  ngOnInit() {
    this.type = this.article.type;
  }

  editArticle() {
    this.modal.open(FormAddArticleComponent, {data: {title: 'Edit Article', content: this.article, type: this.type}})
        .afterClosed.subscribe( response => {
      this.articleService.saveArticles(response);
    });
  }

}
