import {Component, Input, OnInit} from '@angular/core';
import {TitleServiceService} from "../../services/title-service.service";
import {ArticlesService} from "../../services/articles.service";
import {TitleFormComponent} from "../forms/title-form/title-form.component";
import {ModalService} from "../modal/modal.service";
import {EditingService} from "../../services/editing.service";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() type;
  private editMode;

  titleContent;

  subscriptions = [];
  constructor(
      private editService: EditingService,
      private modal: ModalService,
      private articleService: ArticlesService
  ) {
    this.subscriptions.push(this.editService.editMode.subscribe(data => {
      this.editMode = data;
    }));
    this.getTitle();
}

  ngOnInit() {
  }

  onEditTitle() {
    const titleId = this.titleContent.id ? this.titleContent.id : null;
    const titleForm = this.titleContent ? this.titleContent : null;
    this.modal.open(TitleFormComponent,
        {data:
                {title: 'Edit page title', content: titleForm, page: this.type, id: titleId  }})
        .afterClosed.subscribe( response => {
      this.articleService.saveTitle(response);
    });
    this.getTitle();
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
