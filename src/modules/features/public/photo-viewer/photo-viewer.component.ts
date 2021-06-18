import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loadImage } from 'canvas';
@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {
  @ViewChild('canvasEl')
  canvasEl!: ElementRef;
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
      this.context.fillRect(0, 0, this.canvasEl.nativeElement.width, 20);
      this.context.fillRect(0, this.canvasEl.nativeElement.height - 20, this.canvasEl.nativeElement.width, 20);

      // Text style
      this.context.font = '20px Arial';
      this.context.textBaseline = 'middle';
      this.context.textAlign = 'center';
      this.context.fillStyle = '#ff0000';

      if (this.textForm.value.upperText) {
        this.context.fillText(this.textForm.value.upperText, this.canvasEl.nativeElement.width / 2, 10);
      }
      if (this.textForm.value.LowerText) {
        this.context.fillText(
          this.textForm.value.LowerText,
          this.canvasEl.nativeElement.width / 2,
          this.canvasEl.nativeElement.height - 10
        );
      }
    });
  }
  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.context.imageSmoothingEnabled = false;
    console.log(this.canvasEl.nativeElement.width);
    loadImage(this.data.image.asset).then((image) => {
      console.log(image);
      this.draw(image);
    });
  }
  draw(image: any) {
    this.context.fillRect(0, 0, this.canvasEl.nativeElement.width, 20);
    this.context.drawImage(image, 0, 20, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height - 40);
    this.context.fillRect(0, this.canvasEl.nativeElement.height - 20, this.canvasEl.nativeElement.width, 20);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
