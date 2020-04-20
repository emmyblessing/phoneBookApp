import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ContactService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getContact() {
    return this.http.get(`${this.url}/api/contacts`);
  }

  getContactById(id) {
    return this.http.get(`${this.url}/api/contacts/${id}`);
  }

  addContact(name, email, mobile, work) {
    const contact = {
      name,
      email,
      mobile,
      work
    };

    return this.http.post(`${this.url}/api/contacts`, contact);
  }

  updateContact(id, name, email, mobile, work) {
    const contact = {
      name,
      email,
      mobile,
      work
    };

    return this.http.put(`${this.url}/api/contacts/${id}`, contact);
  }

  deleteContact(id) {
    return this.http.delete(`${this.url}/api/contacts/${id}`);
  }

}
