import { FooterComponent } from "./footer.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./../../../app/material.module";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
