import { Component, OnInit } from '@angular/core';
import {Article, ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-polishing',
  templateUrl: './polishing.component.html',
  styleUrls: ['./polishing.component.scss']
})
export class PolishingComponent implements OnInit {

  articles: Article[];

  constructor(articleService: ArticlesService) {
    this.articles = articleService.articles;
    console.log(this.articles)
  }

  ngOnInit() {
  }

}
