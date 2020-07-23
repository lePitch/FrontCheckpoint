import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url + 'files');
  }

  uploadFile(file: FormData){
    return this.http.post(this.url + 'uploads', file).subscribe();
  }

  getFile(name: String){
    return this.http.get(this.url + 'files/' + name).subscribe();
  }
}
