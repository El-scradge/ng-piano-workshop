import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiObject} from "../services/api-calls.service";
import {ArticlesService} from "../services/articles.service";
import {ModalService} from "../shared/modal/modal.service";
import {FormAddArticleComponent} from "../shared/forms/form-add-article/form-add-article.component";
import {EditingService} from "../services/editing.service";
import {TitleServiceService} from "../services/title-service.service";
import {TitleFormComponent} from "../shared/forms/title-form/title-form.component";

@Component({
  selector: 'app-rebuilds',
  templateUrl: './rebuilds.component.html',
  styleUrls: ['./rebuilds.component.scss']
})
export class RebuildsComponent implements OnInit, OnDestroy {

  editMode;
  /**
   * The articles to be used on the page.
   */
  articles: ApiObject[];

  /**
   * sets the type of article for the page, so that the correct url is used.
   * @type {string}
   */
  type = 'rebuilds';

  titleContent = 'test';

  subscriptions = [];

  constructor(
      private articleService: ArticlesService,
      private modal: ModalService,
      private editService: EditingService,
      private titleService: TitleServiceService
  ) {
    this.getArticles();
    this.getTitle();
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
    this.modal.open(FormAddArticleComponent, {data: {type: this.type, title: 'Create Article on page' + this.type, content:{}}})
        .afterClosed.subscribe( response => {
      this.articleService.saveArticles(response);
      this.getArticles();
    });
  }

  onEditTitle() {
    this.modal.open(TitleFormComponent, {data: {title: 'Edit page title', content:  this.titleContent, page: this.type}})
        .afterClosed.subscribe( response => {
      this.articleService.saveTitle(response);
    });
    this.getTitle();
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

  getTitle() {
    this.subscriptions.push( this.articleService.getTitle().subscribe( data => {
      console.log('title', data);
    }));
  }

}
