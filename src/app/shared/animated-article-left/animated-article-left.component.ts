import {Component, Input, OnInit} from '@angular/core';
import {loadTriggerLeft} from "../animations/main.animations";

@Component({
  selector: 'app-animated-article-left',
  templateUrl: './animated-article-left.component.html',
  styleUrls: ['./animated-article-left.component.scss'],
  animations: [loadTriggerLeft]
})
export class AnimatedArticleLeftComponent implements OnInit {

  @Input() article;
  constructor() { }

  ngOnInit() {
  }

}
