import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Canvas, loadImage } from 'canvas';
@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {
  @ViewChild('canvasEl')
  canvasEl!: ElementRef<Canvas>;
  context: any;
  textForm!: FormGroup;
  image: any;
  constructor(
    public dialogRef: MatDialogRef<PhotoViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.textForm = new FormGroup({
      upperText: new FormControl(),
      LowerText: new FormControl()
    });
    this.textForm.valueChanges.subscribe(() => {
      // Clear the rectangle on every change
      this.context.fillStyle = '#000000';
      this.context.fillRect(0, 0, this.canvasEl.nativeElement.width, 60);
      this.context.fillRect(0, this.canvasEl.nativeElement.height - 60, this.canvasEl.nativeElement.width, 60);

      // Text style
      this.context.font = '30px Arial';
      this.context.textBaseline = 'middle';
      this.context.textAlign = 'center';
      this.context.fillStyle = '#ff0000';

      if (this.textForm.value.upperText) {
        this.context.fillText(this.textForm.value.upperText, this.canvasEl.nativeElement.width / 2, 30);
      }
      if (this.textForm.value.LowerText) {
        this.context.fillText(
          this.textForm.value.LowerText,
          this.canvasEl.nativeElement.width / 2,
          this.canvasEl.nativeElement.height - 30
        );
      }
    });
  }
  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement).getContext('2d');
    this.context.imageSmoothingEnabled = false;
    loadImage(this.data.image.asset).then((image) => {
      console.log(image);
      console.log('Image width : ' + image.width);
      console.log('Image height : ' + image.height);
      this.draw(image);
    });
  }
  draw(image: any) {
    this.context.fillRect(0, 0, this.canvasEl.nativeElement.width, 60);
    this.context.drawImage(image, 0, 60, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height - 120);
    this.context.fillRect(0, this.canvasEl.nativeElement.height - 60, this.canvasEl.nativeElement.width, 60);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  downloadImage(fileName: string = 'myimg.png') {
    // get image data and transform mime type to application/octet-stream
    let canvas: any = document.getElementById("myCanvas");
    var canvasDataUrl = canvas.toDataURL()
            .replace(/^data:image\/[^;]*/, 'data:application/octet-stream'),
        link = document.createElement('a'); // create an anchor tag

    // set parameters for downloading
    link.setAttribute('href', canvasDataUrl);
    link.setAttribute('target', '_blank');
    link.setAttribute('download', fileName);

    // compat mode for dispatching click on your anchor
    if (document.createEvent) {
        var evtObj = document.createEvent('MouseEvents');
        evtObj.initEvent('click', true, true);
        link.dispatchEvent(evtObj);
    } else if (link.click) {
        link.click();
    }
}
}
