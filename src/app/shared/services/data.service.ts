import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../environments/environment.prod';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService{

  getPostUrl = environment.BASE_URL + "/search_by_date?tags=story";

  constructor(private http : HttpClient){}

  getPosts() : Observable<any>{
    return this.http.get(this.getPostUrl);
  }

}
