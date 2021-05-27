import { Component, OnInit } from '@angular/core';
import { BulletinService } from '../bulletin.service';
@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {

  documents = []
  constructor(private _bulletinService: BulletinService) { }

  ngOnInit() {
    this._bulletinService.getBulletin()
    .subscribe(
      res => this.documents = res,
      err => console.log(err)
    )
  }

}
