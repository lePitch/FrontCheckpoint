import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hackathon } from 'src/app/models/hackathon/hackathon';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {

  url = 'http://localhost:8080/hackathons/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hackathon[]>{
    return this.http.get<Hackathon[]>(this.url + 'all');
  }

  getHackathonById(id: number): Observable<Hackathon>{
    return this.http.get<Hackathon>(this.url + id);
  }

  newHackathon(hackathon: Hackathon){
    return this.http.post(this.url, hackathon).subscribe();
  }

  deleteHackathon(id: number){
    this.http.delete(this.url + id).subscribe();
  }
}
