import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Member } from 'src/app/models/member/member';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/team/team';
import { RandomuserService } from 'src/app/shared/randomuser/randomuser.service';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.scss']
})
export class MemberformComponent implements OnInit {

  @Output() memberCreated = new EventEmitter<Member>();
  @Input() m: Member;

  member: Member = new Member();

  id:number;

  constructor(private router: Router, private route: ActivatedRoute,
    private randomUserService: RandomuserService) { }

  ngOnInit(): void {
    if(this.m != undefined){this.member = this.m;}
  }

  randomize(){
    this.router.navigate(['']);
    this.route.params.subscribe(params => { this.id = +params.id; });
    this.randomUserService.getRandomUser(this.id);
  }

  onSubmit() {
    this.router.navigate(['']);
    this.route.params.subscribe(params => {
      this.member.team = new Team();
      this.member.team.id = +params.id; });
    this.memberCreated.emit(this.member);
  }
}
