import { Component, OnInit } from '@angular/core';
import {loadTriggerLeft} from "../animations/main.animations";

@Component({
  selector: 'app-animated-article-imaged',
  templateUrl: './animated-article-imaged.component.html',
  styleUrls: ['./animated-article-imaged.component.scss'],
  animations: [loadTriggerLeft]
})
export class AnimatedArticleImagedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
