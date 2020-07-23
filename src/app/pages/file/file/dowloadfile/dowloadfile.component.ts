import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/upload/file.service';


@Component({
  selector: 'app-dowloadfile',
  templateUrl: './dowloadfile.component.html',
  styleUrls: ['./dowloadfile.component.scss']
})
export class DowloadfileComponent implements OnInit {

  files: Object;
  constructor(private service: FileService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      data => {this.files = data;})
  }
}
