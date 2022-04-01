import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Joke} from "../../interfaces/joke";
import {CollectionService} from "../../services/collection.service";

@Component({
  selector: 'app-joke-selector',
  templateUrl: './joke-selector.component.html',
  styleUrls: ['./joke-selector.component.css']
})
export class JokeSelectorComponent implements OnInit {

  displayJoke: Joke = {
    id: 'random',
    joke: 'broken pencils are pointless'
  }

  constructor(private api: ApiService, private collection: CollectionService) { }

  ngOnInit(): void {

  }

  getJoke (): void {
    this.api.getRandomJoke().subscribe(res => {
      this.displayJoke = res
    })
  }

  approve (): void {
    this.collection.addToCollection(this.displayJoke)
    this.getJoke()
  }

  disapprove (): void {
    this.getJoke()
  }
}
