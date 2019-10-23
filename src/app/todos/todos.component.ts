import { Component, OnInit } from '@angular/core';

import {Todo} from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo: Todo = {
    title: "Coding",
    description: "Write some code.",
  }

  constructor() { }

  ngOnInit() {
  }

}
