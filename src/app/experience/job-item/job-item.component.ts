import { Component, Input } from '@angular/core';
import { Job } from '../job.model';
import { BulletPoint } from 'src/app/bullet-point.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent {
  @Input() jobItem!: Job;
}
