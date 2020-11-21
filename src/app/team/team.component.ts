import {Component, OnDestroy, OnInit} from '@angular/core';
import { Article, ArticlesService } from '../services/articles.service';
import { ModalService } from '../shared/modal/modal.service';
import { FormAddArticleComponent } from '../shared/forms/form-add-article/form-add-article.component';
import {ApiObject} from "../services/api-calls.service";
import {EditingService} from "../services/editing.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  editMode;

  articles: ApiObject[];

  type: 'team';

  subscriptions = [];
  constructor(
      private articleService: ArticlesService,
      private modal: ModalService,
      private editService: EditingService,
  ) {
    this.getArticles();
    this.subscriptions.push(this.editService.editMode.subscribe( data => {
      this.editMode = data;
    }));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.map((sub) => sub.unsubscribe());
  }
  /**
   * opens the modal for creating articles on the page
   * This is returned from the after close area of the modal.
   */
  onAddItem() {
    this.modal.open(FormAddArticleComponent, {data: {type: this.type, title: 'Add Team Member' + this.type}})
        .afterClosed.subscribe( response => {
      this.articleService.saveArticles(response);
      this.getArticles();
    });
  }

  getArticles() {
    this.subscriptions.push( this.articleService.getArticles(this.type).subscribe( data => {
          this.articles = data;
        })
    );
  }
}
