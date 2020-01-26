import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImageEncodeService {

  constructor() {


  }

  encodeImage(image) {
    console.log('image to encode', image);
  }

}
