import {Component, Input, OnInit} from '@angular/core';
import {loadTrigger} from '../animations/main.animations';

@Component({
  selector: 'app-animated-article',
  templateUrl: './animated-article.component.html',
  styleUrls: ['./animated-article.component.scss'],
  animations: [loadTrigger]
})
export class AnimatedArticleComponent implements OnInit {

  @Input() article;
  constructor() { }

  ngOnInit() {
  }

}
