import { Component, Input } from '@angular/core';
import { Project } from '../project.model';
import { BulletPoint } from 'src/app/bullet-point.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent {
  @Input() projectItem!: Project;
}
