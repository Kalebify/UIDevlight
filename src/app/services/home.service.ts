import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(protected http: HttpClient) {}

  getDeals(input: string) {
    return this.http.get(`${environment.apiEndpoint}/deals?q=${input}`);
  }
}
