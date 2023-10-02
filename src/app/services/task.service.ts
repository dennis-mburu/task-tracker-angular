import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
// import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = `http://localhost:4000/tasks`;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    //   const tasks = of(TASKS);
    //   return tasks;

    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }

  updateReminder(task: Task) {
    return this.http.put(`${this.apiUrl}/${task.id}`, task);
  }
}
