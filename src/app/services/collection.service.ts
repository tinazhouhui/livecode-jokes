import { Injectable } from '@angular/core';
import {Joke} from "../interfaces/joke";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  jokeCollection: Joke[] = [];

  constructor() { }

  addToCollection (joke: Joke): void {
    this.jokeCollection.push(joke)
  }
}
