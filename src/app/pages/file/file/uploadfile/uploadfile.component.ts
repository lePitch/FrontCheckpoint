import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/upload/file.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.scss']
})
export class UploadfileComponent implements OnInit {
  size = 0;
  unit = "";
  file:File;
  constructor(private service:FileService) { }

  ngOnInit(): void {

  }

  fileChange(event: any) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
  upload() {
    let body = new FormData();
    body.append("file", this.file);
    this.service.uploadFile(body);
  }
}
