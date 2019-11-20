import { Component, OnInit } from '@angular/core';

import { ModalRef } from '../../modal/modal-ref';
import {ModalConfig} from "../../modal/modal-config";

@Component({
  selector: 'app-form-add-article',
  templateUrl: './form-add-article.component.html',
  styleUrls: ['./form-add-article.component.scss']
})
export class FormAddArticleComponent implements OnInit {

  public inputData;

  constructor(
    private modal: ModalRef,
    public config: ModalConfig
  ) {
    this.inputData = this.config.data;
  }

  ngOnInit() {
  }

  /**
   * Passes the form data out of the modal through the on close method,
   * Only basic validation atm, needs to be extended
   *
   * The type of page is passed through so that the correct api call can be made
   * @param formData
   */

  onAddArticle(formData) {
    const data = {type: this.inputData.type, attributes: formData.form.value};

    this.modal.close(data);
  }
}
