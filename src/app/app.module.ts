import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { HackathonComponent } from './pages/hackathon/hackathon/hackathon.component';
import { EquipelistComponent } from './pages/hackathon/hackathon/equipelist/equipelist.component';
import { EquipeComponent } from './pages/equipe/equipe/equipe.component';
import { DetailsComponent } from './pages/equipe/equipe/details/details.component';
import { MemberComponent } from './pages/create/member/member.component';
import { MemberformComponent } from './pages/create/member/memberform/memberform.component';
import { HackathonlistComponent } from './pages/home/homepage/hackathonlist/hackathonlist.component';
import { TeamComponent } from './pages/create/team/team.component';
import { TeamformComponent } from './pages/create/team/teamform/teamform.component';
import { HackathonformComponent } from './pages/create/hackathon/createhackathon/hackathonform/hackathonform.component';
import { CreatehackathonComponent } from './pages/create/hackathon/createhackathon/createhackathon.component';
import { DowloadfileComponent } from './pages/file/file/dowloadfile/dowloadfile.component';
import { FileComponent } from './pages/file/file/file.component';
import { UploadfileComponent } from './pages/file/file/uploadfile/uploadfile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HackathonlistComponent,
    HackathonComponent,
    EquipelistComponent,
    EquipeComponent,
    DetailsComponent,
    MemberComponent,
    MemberformComponent,
    TeamComponent,
    TeamformComponent,
    HackathonformComponent,
    CreatehackathonComponent,
    UploadfileComponent,
    DowloadfileComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
