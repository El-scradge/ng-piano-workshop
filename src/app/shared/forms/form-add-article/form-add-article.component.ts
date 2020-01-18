import { Component, OnInit } from '@angular/core';

import { ModalRef } from '../../modal/modal-ref';
import {ModalConfig} from "../../modal/modal-config";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-add-article',
  templateUrl: './form-add-article.component.html',
  styleUrls: ['./form-add-article.component.scss']
})
export class FormAddArticleComponent implements OnInit {

  /**
   * input data from the modal, this is set from the config
   */
  public inputData;

  public formData = { title: '', content: '',};

  private id;
  constructor(
    private modal: ModalRef,
    public config: ModalConfig
  ) {
    this.inputData = this.config.data;
  }

  ngOnInit() {
    console.log(this.inputData);
    if (this.inputData.content.id) {
      this.formData = this.inputData.content.attributes;
      this.id = this.inputData.content.id;
    }
  }

  /**
   * Passes the form data out of the modal through the on close method,
   * Only basic validation atm, needs to be extended
   *
   * The type of page is passed through so that the correct api call can be made
   * @param formData
   */

  onAddArticle(formData: NgForm) {
    const data = {type: this.inputData.type, attributes: formData.form.value, id: this.id};
    console.log('form data', data);
    this.modal.close(data);
  }
}
