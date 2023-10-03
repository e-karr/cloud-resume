import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { EducationItemComponent } from './education/education-item/education-item.component';
import { EducationService } from './education/education.service';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './skills/skills.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './projects/projects.service';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceService } from './experience/experience.service';
import { JobItemComponent } from './experience/job-item/job-item.component';
import { VisitorCountService } from './visitor-count.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    FooterComponent,
    EducationComponent,
    EducationItemComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ExperienceComponent,
    JobItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    EducationService,
    SkillsService,
    ProjectsService,
    ExperienceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
