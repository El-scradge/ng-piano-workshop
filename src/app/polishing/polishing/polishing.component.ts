import { Component, OnInit } from '@angular/core';
import { Article, ArticlesService } from '../../services/articles.service';
import { ModalService } from '../../shared/modal/modal.service';
import { FormAddArticleComponent } from '../../shared/forms/form-add-article/form-add-article.component';

@Component({
  selector: 'app-polishing',
  templateUrl: './polishing.component.html',
  styleUrls: ['./polishing.component.scss']
})
export class PolishingComponent implements OnInit {

  /**
   * The articles to be used on the page.
   */
  articles: {id: string, type: string, attribututes: Article};

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
   */
  onAddItem() {
    this.modal.open(FormAddArticleComponent, {data: {type: this.type, title: 'Create Article on page' + this.type}})
      .afterClosed.subscribe( response => {
        console.log(response);
        this.articleService.saveArticlesPolishing(response);
        this.getArticles();
    });
  }

  /**
   * gets the articles for the french polishing pages
   */
  getArticles() {
  this.articleService.getArticlesPolishing().subscribe( data => {
      console.log(data);
      this.articles = data;
    });
  }

}
