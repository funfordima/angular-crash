import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private readonly uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  public toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  public hasRoute(route: string): boolean {
    return this.router.url === route;
  }

}
