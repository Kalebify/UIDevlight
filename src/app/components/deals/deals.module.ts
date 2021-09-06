import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DealsComponent } from "./deals.component";
import { MaterialModule } from "./../../../app/material.module";

@NgModule({
  declarations: [DealsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DealsComponent],
})
export class DealsModule {}
