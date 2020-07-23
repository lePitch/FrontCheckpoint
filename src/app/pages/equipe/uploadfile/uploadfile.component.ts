import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/upload/file.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  // async handleFileSelected() {
    // if(this.file != undefined)
    // {
      // console.log(this.file.size)
      // const size = this.file[0].size;
      // if (size < 1000) {
        // this.size = size;
        // this.unit = "bytes";
        // return true;
      // } else if (size < 1000*1000) {
        // this.size = size / 1000;
        // this.unit = "kb";
        // return true;
      // } else if (size < 1000*1000*1000*1000) {
        // this.size = size / 1000 / 1000;
        // this.unit = "mb";
        // console.log(this.size)
        // return false;
      // } else {
        // this.size = size / 1000 /1000 /1000;
        // this.unit = "gb";
        // return false;
      // }
  // }
  // }
//
  // onFileChange(event){
    // this.file = event.target.file;
    // console.log(event);
  // }
//
  // onSubmit(file){
    // this.service.uploadFile(file);
  // }

}
