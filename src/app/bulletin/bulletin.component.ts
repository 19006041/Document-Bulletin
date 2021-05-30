import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BulletinService } from '../bulletin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {

  documents = []
  constructor(private _bulletinService: BulletinService,  private _router: Router) { }

  ngOnInit() {
    this.documents = this._bulletinService.getBulletin()

  }

  create(){
    this._router.navigate(['/create'])
  }

  view(){
    alert ('View')
  }

}
