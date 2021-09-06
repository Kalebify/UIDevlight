import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormSearchComponent } from "./form-search.component";
import { MaterialModule } from "./../../../app/material.module";

@NgModule({
  declarations: [FormSearchComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FormSearchComponent],
})
export class FormSearchModule {}
