import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'copy_2';
  constructor(private router: Router) {}
  goto(page: any) {
    this.router.navigate([page]);
  }
  image: any = [];
  i = 0;

  webcamImage: WebcamImage | undefined;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.image[this.i] = webcamImage;
    this.i++;
  }
}
