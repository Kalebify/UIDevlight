import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.component.html",
  styleUrls: ["./deals.component.scss"],
})
export class DealsComponent {
  @Input() deals: [];
  constructor() {}
}
