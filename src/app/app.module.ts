import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from 'src/modules/shared/style/app-material.module';
import { PhotoViewerComponent } from 'src/modules/features/public/photo-viewer/photo-viewer.component';

@NgModule({
  declarations: [AppComponent, PhotoViewerComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    BlockUIModule.forRoot({
      // template: BlockTemplateCmp,
      message: 'Loading.................'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
