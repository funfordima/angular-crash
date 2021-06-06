import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import type { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

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

  public onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  public onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }

}
