import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BulletinService } from '../bulletin.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  requiredTitleError = 'Title is required';
  invalidTitleError = 'Title is invalid';
  requiredDetailsError = 'Details are required';
  invalidDetailsError = 'Detail text is invalid';

  //Getting the list of documents as well as initializing the the new document object.
  documents = [];
  createDocumentData: any = {};
  constructor(
    private _bulletinService: BulletinService,
    private _router: Router
  ) {}

  ngOnInit() {
    //Getting the documents list to be added to.
    this.documents = this._bulletinService.getBulletin();
  }

  createDocument(logForm: NgForm) {
    //Adding the new document to the list and showing the user the updated list.
    try {
      var index = this.documents.length - 1;
      var id = this.documents[index]._id;

      id++;
    } catch (Error) {
      id = 1;
    }

    const d: Date = new Date();

    const doc = {
      _id: id,
      name: this.createDocumentData.title,
      description: this.createDocumentData.details,
      date: d,
    };

    //console.log(id);
    this.documents.push(doc);
    this._router.navigate(['/bulletin']);
  }
}
