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
    MemberformComponent
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
