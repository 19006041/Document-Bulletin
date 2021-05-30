import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  createDocumentData:any = {}
  constructor(
    private _router: Router) { }

  ngOnInit(): void {
  }

  createDocument(logForm:NgForm){



  }

}
