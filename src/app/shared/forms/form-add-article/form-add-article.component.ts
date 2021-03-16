import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/storage';
import { ModalRef } from '../../modal/modal-ref';
import {ModalConfig} from "../../modal/modal-config";
import {NgForm} from "@angular/forms";

import {AngularFireStorage} from "@angular/fire/storage";
import { Ng2ImgMaxService } from 'ng2-img-max';

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
  uploadedImage: File;
  images = [];
  public formData = { title: '', content: '', image: '', bg: '', fileLink: '', imageIsFile: true};

  private id;
  constructor(
      private modal: ModalRef,
      public config: ModalConfig,
      private storage: AngularFireStorage,
      private ng2ImgMax: Ng2ImgMaxService
  ) {
    this.inputData = this.config.data;
  }

  ngOnInit() {
    this.image = this.inputData.content.attributes.image;
    this.getSavedImages();
    if (this.inputData.content.id) {
      this.formData = this.inputData.content.attributes;
      this.id = this.inputData.content.id;
    }
  }


  addImage(event) {
    const file = event.target.files[0];
    const filePath = 'user-images/' + file.name;

    this.ng2ImgMax.resizeImage(file, 720, 500).subscribe(
        result => {
          this.uploadedImage = new File([result], result.name);
          const task = this.storage.upload(filePath, this.uploadedImage);
        }
    )


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
    const formAttributes = formData.form.value;
    formAttributes.image = this.image;
    const data = {type: this.inputData.type, attributes: formAttributes, id: this.id};
    this.modal.close(data);
  }

  getSavedImages() {
     const storageRef = firebase.storage().ref();
     const listRef = storageRef.child('user-images');
     listRef.listAll().then((res) => {
      res.items.forEach((itemRef) => {
        console.log(itemRef.fullPath);
        const imageRef = this.storage.ref(itemRef.fullPath);
        const imagePath = imageRef.getDownloadURL();
        const imageObject = {path: itemRef.fullPath, imageDownloadPath: imagePath };
        this.images.push(imageObject);
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
     console.log(this.images);
  }

  selectImage(imagePath) {
    console.log(`select ${imagePath}, current image is ${this.image}`);
    this.image = imagePath;
  }

}
