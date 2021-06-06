import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import type { Subscription } from 'rxjs';

import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  public text: string;
  public day: string;
  public reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private readonly uiService: UiService) {
    this.text = '';
    this.day = '';
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
