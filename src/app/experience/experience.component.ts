import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Job } from './job.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList: Job[] = []

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceList = this.experienceService.getExperienceList();
  }

}
