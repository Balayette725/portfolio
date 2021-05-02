import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { VeilleTechnoComponent } from './veille-techno/veille-techno.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experience', component : ExperienceComponent},
  {path:'veille', component: VeilleTechnoComponent},
  {path: 'projets', component: ProjetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
