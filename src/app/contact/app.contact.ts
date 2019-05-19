import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.html'
})
export class AppContact implements OnInit {

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder){

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
}

}
