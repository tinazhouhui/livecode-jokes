import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Joke} from "../../interfaces/joke";

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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getJoke()
  }

  getJoke () {
    this.api.getRandomJoke().subscribe(res => {
      this.displayJoke = res
    })
  }
}
