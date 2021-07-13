import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BulletinService } from '../bulletin.service';
import * as sanitizeHtml from 'sanitize-html';
import { LogService } from '../shared/log.service';
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
      this.documents = this._bulletinService.getBulletin()

    }


  createDocument(logForm:NgForm){

    try{
    var index = this.documents.length-1;
    var id = this.documents[index]._id;

    id++;

    }
    catch(Error){

      id = 1;
    }



    const d: Date = new Date();

    const name = sanitizeHtml(this.createDocumentData.title);
    const description = sanitizeHtml(this.createDocumentData.details);


    const doc = {
      _id: id,
      name: name,
      description: description,
      date: d,
   }

   console.log(id);
    this.documents.push(doc)
    this._router.navigate(['/bulletin'])

  }

}
