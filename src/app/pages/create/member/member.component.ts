import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/member/member.service';
import { TeamService } from 'src/app/shared/team/team.service';
import { Member } from 'src/app/models/member/member';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/team/team';
import { RandomuserService } from 'src/app/shared/randomuser/randomuser.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  team: Team;

  constructor(private router: Router,
    private memberService: MemberService,
    private teamService: TeamService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
    this.teamService.getTeamById(+params.get('id')).subscribe(
      data => this.team = data); } );
  }
  parentReception(member: Member){
    this.router.navigate(['/team', this.team.id ]);
    this.memberService.newMember(member);
  }

}
