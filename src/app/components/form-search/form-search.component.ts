import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-form-search",
  templateUrl: "./form-search.component.html",
  styleUrls: ["./form-search.component.scss"],
})
export class FormSearchComponent implements OnInit {
  input: string = "";
  @Output() inputEvent = new EventEmitter(true);
  constructor() {}

  public searchDeal(input) {
    input.length >= 3 && this.inputEvent.emit(input);
  }
  ngOnInit() {}
}
