import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.html'
})
export class AppContact implements OnInit {

  contactForm: FormGroup;
  baseUri = 'http://localhost:8080';
  constructor(private formBuilder: FormBuilder, private http: HttpClient){

  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required]
    });
}

onSubmit() {
  console.log(this.contactForm);
  var obj = {'email': this.contactForm.value.email, 'subject': this.contactForm.value.subject, 'message': this.contactForm.value.message }
  console.log(obj);
  this.http.post(`${this.baseUri}/send`, obj)
    .subscribe(res => console.log('Done'));
}

}
