import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() onUpdateReminder = new EventEmitter();

  onDeleteTask() {
    this.deleteTask.emit();
  }

  onDblClick() {
    this.onUpdateReminder.emit();
  }
}
