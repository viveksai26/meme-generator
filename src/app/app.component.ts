import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoViewerComponent } from 'src/modules/features/public/photo-viewer/photo-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
      width: '60vw',
      height: '85vh',
      data: {
        image
      }
    });
  }
}
