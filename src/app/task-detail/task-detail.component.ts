import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit {
  taskId: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));
    })
  }


}
