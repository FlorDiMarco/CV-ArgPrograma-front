import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { NewskillComponent } from './components/hard-soft-skills/newskill.component';
import { EditskillComponent } from './components/hard-soft-skills/editskill.component';
import { EditaboutComponent } from './components/about/editabout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: 'nuevaedu', component: NeweducationComponent },
  { path: 'editedu/:id', component: EditExperienceComponent },
  { path: 'newskill', component: NewskillComponent },
  { path: 'editskill/:id', component: EditskillComponent },
  { path: 'editabout/:id', component: EditaboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
