import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { EducationItemComponent } from './education/education-item/education-item.component';
import { EducationService } from './education/education.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    FooterComponent,
    EducationComponent,
    EducationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EducationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
