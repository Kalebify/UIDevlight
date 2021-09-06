import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public deals = new BehaviorSubject([]);
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getDeals();
  }

  public getDeals(input = " "): void {
    this.homeService.getDeals(input).subscribe(
      (data: any[]) => {
        console.log(data);
        this.deals.next(data.slice(0, 6));
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
