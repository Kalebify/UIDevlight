import { DealsModule } from "./../../components/deals/deals.module";
import { TopbarModule } from "./../../components/topbar/topbar.module";
import { FormSearchModule } from "./../../components/form-search/form-search.module";
import { HeaderModule } from "./../../components/header/header.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "./../../../app/material.module";
import { FooterModule } from "./../../components/footer/footer.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HeaderModule,
    FooterModule,
    FormSearchModule,
    TopbarModule,
    DealsModule,
  ],
})
export class HomeModule {}
