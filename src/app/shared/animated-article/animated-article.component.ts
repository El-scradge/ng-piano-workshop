import {Component, Input, OnInit} from '@angular/core';
import {loadTriggerLeft} from '../animations/main.animations';

@Component({
  selector: 'app-animated-article',
  templateUrl: './animated-article.component.html',
  styleUrls: ['./animated-article.component.scss'],
  animations: [loadTriggerLeft]
})
export class AnimatedArticleComponent implements OnInit {

  @Input() article;
  constructor() { }

  ngOnInit() {
  }

}
