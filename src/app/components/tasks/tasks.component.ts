import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  handleDeleteTask(id: number) {
    this.taskService
      .deleteTask(id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((task) => task.id !== id))
      );
  }

  handleUpdateReminder(task: Task) {
    // let updatedTask = this.tasks.find((t) => t.id === task.id);
    // updatedTask!.reminder = !updatedTask?.reminder;

    task.reminder = !task.reminder

    this.taskService.updateReminder(task).subscribe();
  }
}
