import { Injectable } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url = 'http://localhost:8080/members/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url + 'all');
  }

  getOne(id: number){
    return this.http.get(this.url + id);
  }

  newMember(member: Member){
    return this.http.post(this.url, member).subscribe();
  }

  editMember(member: Member, id: number){
    return this.http.put(this.url + id, member).subscribe();
  }

  delete(id: number){
    return this.http.delete(this.url + id);
  }
}
