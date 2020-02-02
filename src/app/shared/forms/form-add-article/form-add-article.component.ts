import { Component, OnInit } from '@angular/core';

import { ModalRef } from '../../modal/modal-ref';
import {ModalConfig} from "../../modal/modal-config";
import {NgForm} from "@angular/forms";
import {ImageEncodeService} from "../../../services/image-encode.service";
import {DomSanitizer} from "@angular/platform-browser";
import {AngularFireStorage} from "@angular/fire/storage";


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

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

  base64Image: string;
  image;

  public formData = { title: '', content: '', image: '', bg: ''};

  private id;
  constructor(
      private modal: ModalRef,
      public config: ModalConfig,
      private storage: AngularFireStorage,
  ) {
    this.inputData = this.config.data;
  }

  ngOnInit() {
    if (this.inputData.content.id) {
      this.formData = this.inputData.content.attributes;
      this.id = this.inputData.content.id;
    }
  }


  addImage(event) {
    const file = event.target.files[0];
    const filePath = 'user-images/' + file.name;
    const task = this.storage.upload(filePath, file);
    this.image = filePath;
  }

  /**
   * Passes the form data out of the modal through the on close method,
   * Only basic validation atm, needs to be extended
   *
   * The type of page is passed through so that the correct api call can be made
   * @param formData
   */

  onAddArticle(formData: NgForm) {
    let formAttributes = formData.form.value;
    formAttributes.image = this.image;
    const data = {type: this.inputData.type, attributes: formAttributes, id: this.id};
    this.modal.close(data);
  }
}
