import { Component, OnInit } from '@angular/core';
import {CollectionService} from "../../services/collection.service";
import {Joke} from "../../interfaces/joke";

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  displayList: Joke[] = []

  constructor(private collection: CollectionService) { }

  ngOnInit(): void {
    this.displayList = this.collection.jokeCollection
  }

}
