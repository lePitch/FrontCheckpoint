import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/team/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url = 'http://localhost:8080/teams/';

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(this.url + 'all');
  }

  getTeamById(id): Observable<Team>{
    return this.http.get<Team>(this.url + id);
  }

  newTeam(team: Team){
    return this.http.post(this.url, team).subscribe();
  }

  delete(id: number){
    this.http.delete(this.url + id).subscribe();
  }
}
