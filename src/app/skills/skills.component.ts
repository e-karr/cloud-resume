import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  languages: Skill[] = [];
  frameworks: Skill[] = [];
  tools: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.languages = this.skillsService.getLanguageList();
    this.frameworks = this.skillsService.getFrameworkList();
    this.tools = this.skillsService.getToolList();
  }
}
