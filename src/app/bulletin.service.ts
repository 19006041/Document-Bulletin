import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  bulletinArray = [
    {
      _id: "1",
      name: "National Health Budget",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "National Education Budget",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Public Hospital Development",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Public Transport Budget",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "RDP Housing Statistics",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Power Station Developments",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];

  //private bulletinUrl = "https://localhost:3000/api/bulletin";
  constructor(private http: HttpClient) { }

  getBulletin(){
    return this.bulletinArray;
  }
}
