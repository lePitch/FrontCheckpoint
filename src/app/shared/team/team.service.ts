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

  getTeamById(id): Observable<Team>{
    return this.http.get<Team>(this.url + id);
  }
}
