import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Joke} from "../interfaces/joke";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootUrl = 'https://icanhazdadjoke.com/'
  constructor(private http: HttpClient) { }

  options = {
      headers: {
        'Accept': 'application/json'
      }
  }

  getRandomJoke (): Observable<Joke> {
    return this.http.get(this.rootUrl, this.options) as  Observable<Joke>
  }
}
