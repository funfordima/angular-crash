import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import type { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  faTimes = faTimes;

  constructor() {
    this.task = {
      text: '',
      day: '',
      reminder: false,
    };
  }

  ngOnInit(): void {
  }

}
