import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {ModalRef} from "../../modal/modal-ref";
import {ModalConfig} from "../../modal/modal-config";


@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.scss']
})
export class TitleFormComponent implements OnInit {

  public inputData;
  public formData = { content: ''};
  private id;
 constructor(
     private modal: ModalRef,
     public config: ModalConfig
 ) {
   this.inputData = this.config.data;
 }

  ngOnInit() {
   if (this.inputData.content) {
     this.formData = this.inputData.content.attributes;
     this.id = this.inputData.id;
   }
  }

  onSaveTitle(formData: NgForm) {
   let formHTMLAttributes = formData.form.value;
   const data = {type: 'title', attributes: {
     page: this.inputData.page, ...formHTMLAttributes},
     id: this.id
     };

   this.modal.close(data);
  }
}
