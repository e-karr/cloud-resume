import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
