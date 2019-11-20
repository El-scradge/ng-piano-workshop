import { Component, OnInit } from '@angular/core';
import {Article, ArticlesService} from '../../services/articles.service';
import {ModalService} from "../../shared/modal/modal.service";
import {FormAddArticleComponent} from "../../shared/forms/form-add-article/form-add-article.component";

@Component({
  selector: 'app-polishing',
  templateUrl: './polishing.component.html',
  styleUrls: ['./polishing.component.scss']
})
export class PolishingComponent implements OnInit {

  articles;

  type = 'polishing'

  constructor(
    private articleService: ArticlesService,
    private modal: ModalService
              ) {
    this.getArticles();
  }

  ngOnInit() {
  }

  onAddItem() {
    this.modal.open(FormAddArticleComponent, {data: {type: this.type, title: 'Create Article on page' + this.type}})
      .afterClosed.subscribe( response => {
        console.log(response);
        this.articleService.saveArticlesPolishing(response);
        this.getArticles();
    });
  }

  getArticles() {
  this.articleService.getArticlesPolishing().subscribe( data => {
      console.log(data);
      this.articles = data;

    });
  }

}
