import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contactService.getContact()
    .subscribe((data: Contact[]) => {
      this.contacts = data;
      console.log('Data requested...');
      console.log(this.contacts);
    });
  }

  editContact(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  viewContact(id) {
    this.router.navigate([`/view/${id}`]);
  }

  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.fetchContacts();
    });
  }

}
