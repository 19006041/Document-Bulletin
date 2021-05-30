import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BulletinService } from '../bulletin.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  requiredTitleError = 'Title is required';
  invalidTitleError = 'Title is invalid';
  requiredDetailsError = 'Details are required';
  invalidDetailsError = 'Detail text is invalid';

  documents = []
  createDocumentData:any = {}
  constructor(private _bulletinService: BulletinService,
    private _router: Router) { }

    ngOnInit() {
      this._bulletinService.getBulletin()
      .subscribe(
        res => this.documents = res,
        err => {
          if (err instanceof HttpErrorResponse){
            if (err.status == 401){
              this._router.navigate(['/login'])
            }
          }
        }
      )
    }


  createDocument(logForm:NgForm){


    const doc = {
      _id: "40",
      name: this.createDocumentData.title,
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
   }

    this.documents.push(doc)
    console.log(this.documents[6].name)

  }

}
