import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id: string;
  contact: any = {};
  updateForm: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      email: '',
      mobile: '',
      work: ''
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.contactService.getContactById(this.id)
      .subscribe(res => {
        this.contact = res;
        this.updateForm.get('name').setValue(this.contact.name);
        this.updateForm.get('email').setValue(this.contact.email);
        this.updateForm.get('mobile').setValue(this.contact.mobile);
        this.updateForm.get('work').setValue(this.contact.work);
      });
    });
  }

  updateContact(name, email, mobile, work){
    this.contactService.updateContact(this.id, name, email, mobile, work).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
