import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { of } from 'rxjs';

import type { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
