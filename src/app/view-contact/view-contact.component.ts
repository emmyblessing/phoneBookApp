import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  id: string;
  contact: any = {};
  updateForm: FormGroup;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: '',
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


}
