import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoViewerComponent } from 'src/modules/features/public/photo-viewer/photo-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imagePath: any;
  url!: string | ArrayBuffer | null;
  message!: string;
  constructor(private dialog: MatDialog) {}
  title = 'memeGenerator';
  selectedPhoto: any;
  images = [
    { asset: 'assets/meme-background/eggs.jpg', name: 'eggs' },
    { asset: 'assets/meme-background/pinapple.jpg', name: 'pinapple' },
    { asset: 'assets/meme-background/corn.jpg', name: 'corn' },
    { asset: 'assets/meme-background/mango.jpg', name: 'mango' },
    { asset: 'assets/meme-background/orange.jpg', name: 'orange' }
  ];
  selectPhoto(image: any) {
    this.selectedPhoto = image;
    this.openDialog(image);
  }
  openDialog(image: any): void {
    this.dialog.open(PhotoViewerComponent, {
      width: '75vw',
      height: '90vh',
      data: {
        image
      }
    });
  }

  onFileChanged(event: any) {
    const files = event.target.files;
    if (files.length === 0) return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      this.openDialog({ asset: this.url, name: 'Custom' })
    };
  }
}
