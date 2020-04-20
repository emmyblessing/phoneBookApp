import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  createForm: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: '',
      mobile: '',
      work: ''
    });
  }

  createContact(name, email, mobile, work) {
    this.contactService.addContact(name, email, mobile, work).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit(): void {
  }

}
