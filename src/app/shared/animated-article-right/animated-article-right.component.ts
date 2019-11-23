import {Component, Input, OnInit} from '@angular/core';
import {loadTriggerRight} from "../animations/main.animations";

@Component({
  selector: 'app-animated-article-right',
  templateUrl: './animated-article-right.component.html',
  styleUrls: ['./animated-article-right.component.scss'],
  animations: [loadTriggerRight]
})
export class AnimatedArticleRightComponent implements OnInit {

  @Input() article;
  constructor() { }

  ngOnInit() {
  }

}
