import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

  url = 'http://localhost:8080/randomusers/';

  constructor(private http: HttpClient) { }

  getRandomUser(id:number){
    this.http.get(this.url + id).subscribe();
  }
}
