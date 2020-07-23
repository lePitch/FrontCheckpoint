import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { HackathonComponent } from './pages/hackathon/hackathon/hackathon.component';
import { EquipeComponent } from './pages/equipe/equipe/equipe.component';
import { MemberComponent } from './pages/create/member/member.component';
import { TeamComponent } from './pages/create/team/team.component';
import { CreatehackathonComponent } from './pages/create/hackathon/createhackathon/createhackathon.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'hackathon/:id', component: HackathonComponent},
  {path: 'team/:id', component: EquipeComponent },
  {path: 'member/create/:id', component: MemberComponent },
  {path: 'team/create/:id', component: TeamComponent },
  {path: 'create', component: CreatehackathonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
