import { Component, OnInit } from '@angular/core';
import { Article, ArticlesService } from '../../services/articles.service';
import { ModalService } from '../../shared/modal/modal.service';
import { FormAddArticleComponent } from '../../shared/forms/form-add-article/form-add-article.component';
import {ApiObject} from "../../services/api-calls.service";

@Component({
  selector: 'app-polishing',
  templateUrl: './polishing.component.html',
  styleUrls: ['./polishing.component.scss']
})
export class PolishingComponent implements OnInit {

  /**
   * The articles to be used on the page.
   */
  articles: ApiObject[];

  /**
   * sets the type of article for the page, so that the correct url is used.
   * @type {string}
   */
  type = 'polishing';

  constructor(
    private articleService: ArticlesService,
    private modal: ModalService
  ) {
    this.getArticles();
  }

  ngOnInit() {
  }

  /**
   * opens the modal for creating articles on the page
   * This is returned from the after close area of the modal.
   */
  onAddItem() {
    this.modal.open(FormAddArticleComponent, {data: {type: this.type, title: 'Create Article on page' + this.type}})
      .afterClosed.subscribe( response => {
        this.articleService.saveArticlesPolishing(response);
        this.getArticles();
    });
  }

  /**
   * gets the articles for the french polishing pages
   */
  getArticles() {
  this.articleService.getArticlesPolishing().subscribe( data => {
      this.articles = data;
    });
  }

}
