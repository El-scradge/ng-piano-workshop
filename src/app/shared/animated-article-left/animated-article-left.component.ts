import {Component, Input, OnInit} from '@angular/core';
import {loadTriggerLeft} from "../animations/main.animations";
import {ModalService} from "../modal/modal.service";
import {FormAddArticleComponent} from "../forms/form-add-article/form-add-article.component";
import {ArticlesService} from "../../services/articles.service";
import {EditingService} from "../../services/editing.service";
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-animated-article-left',
  templateUrl: './animated-article-left.component.html',
  styleUrls: ['./animated-article-left.component.scss'],
  animations: [loadTriggerLeft]
})
export class AnimatedArticleLeftComponent implements OnInit {

  type;
  editMode;
  subscriptions = [];
  image;
  imageUrl;
  @Input() article;
  constructor(
    private modal: ModalService,
    private articleService: ArticlesService,
    private editService: EditingService,
    private storage: AngularFireStorage,
  ) {
    this.subscriptions.push(this.editService.editMode.subscribe( data => {
          this.editMode = data;
        }
    ));

  }

  ngOnInit() {
    this.type = this.article.type;
    this.getImage();
  }

  editArticle() {
    this.modal.open(FormAddArticleComponent, {data: {title: 'Edit Article', content: this.article, type: this.type}})
      .afterClosed.subscribe( response => {
      this.articleService.saveArticles(response);
    });
  }

  getImage() {
    if (this.article.attributes.image != null) {
      const ref = this.storage.ref(this.article.attributes.image);
      this.image = ref.getDownloadURL();
    } else if (this.article.attributes.fileLink != null) {
      this.image = this.article.attributes.fileLink;
    }
  }

}
