import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  private bulletinUrl = "http://localhost:3000/api/bulletin";
  constructor(private http: HttpClient) { }

  getBulletin(){
    return this.http.get<any>(this.bulletinUrl)
  }
}
