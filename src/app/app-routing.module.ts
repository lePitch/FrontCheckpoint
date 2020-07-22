import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { Hackathon } from './models/hackathon/hackathon';
import { HackathonComponent } from './pages/hackathon/hackathon/hackathon.component';
import { EquipeComponent } from './pages/equipe/equipe/equipe.component';
import { MemberComponent } from './pages/create/member/member.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'hackathon/:id', component: HackathonComponent},
  {path: 'team/:id', component: EquipeComponent },
  {path: 'team/create/:id', component: MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
