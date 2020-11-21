import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article, ArticlesService } from '../../services/articles.service';
import { ModalService } from '../../shared/modal/modal.service';
import { FormAddArticleComponent } from '../../shared/forms/form-add-article/form-add-article.component';
import {ApiObject} from "../../services/api-calls.service";
import {EditingService} from "../../services/editing.service";

@Component({
  selector: 'app-polishing',
  templateUrl: './polishing.component.html',
  styleUrls: ['./polishing.component.scss']
})
export class PolishingComponent implements OnInit, OnDestroy {

  editMode;
  /**
   * The articles to be used on the page.
   */
  articles: ApiObject[];

  /**
   * sets the type of article for the page, so that the correct url is used.
   * @type {string}
   */
  type = 'polishing';

  subscriptions = [];

  constructor(
    private articleService: ArticlesService,
    private modal: ModalService,
    private editService: EditingService,
  ) {
    this.getArticles();
    this.subscriptions.push(this.editService.editMode.subscribe(data => {
      this.editMode = data;
    }));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub) => sub.unsubscribe());
  }

  /**
   * opens the modal for creating articles on the page
   * This is returned from the after close area of the modal.
   */
  onAddItem() {
    this.modal.open(FormAddArticleComponent, {data: {type: this.type, title: 'Create Article on page' + this.type}})
      .afterClosed.subscribe( response => {
        this.articleService.saveArticles(response);
        this.getArticles();
    });
  }

  /**
   * gets the articles for the french polishing pages
   */
  getArticles() {
    this.subscriptions.push( this.articleService.getArticles(this.type).subscribe( data => {
        this.articles = data;
      })
    );
  }
}
