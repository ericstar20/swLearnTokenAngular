import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule, // ✅ for [(ngModel)]
  ],
  bootstrap: [],
})
export class AppModule {}
