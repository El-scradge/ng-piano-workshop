import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  type = 'home';
  subscriptions = [];
  titleContent;

  constructor(private articleService: ArticlesService) {
    this.getTitle();
  }

  ngOnInit() {
  }

  getTitle() {
    this.subscriptions.push(this.articleService.getTitle().subscribe(data => {
      const filteredTitle = data.filter((title) => {
        return title.attributes.page === this.type;
      });
      this.titleContent = filteredTitle[0];
    }));
  }
}
