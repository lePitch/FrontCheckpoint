import { Injectable } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url = 'http://localhost:8080/members/';

  constructor(private http: HttpClient) { }

  createMember(member: Member){
    return this.http.post(this.url, member);
  }
}
