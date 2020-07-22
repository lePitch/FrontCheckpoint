import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team/team';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.scss']
})
export class MemberformComponent implements OnInit {

  @Output() memberCreated = new EventEmitter<Member>();
  @Input() m: Member;

  member: Member = new Member();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.m != undefined){this.member = this.m;}
  }

  onSubmit() {
    this.route.params.subscribe(params => {
      this.member.team = new Team();
      this.member.team.id = +params.id; });
    this.memberCreated.emit(this.member);
  }
}
