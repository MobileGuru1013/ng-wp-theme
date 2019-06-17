import { Component, OnInit } from '@angular/core';

import { EmailService } from './../../../../shared/wp-services/email.service';
import { Email } from './email.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [EmailService]
})
export class ContactFormComponent implements OnInit {
  public model: Email;
  public processed: Boolean;
  public messageSent: Boolean;
  public error: Boolean;

  constructor(private emailService: EmailService) {
    this.processed = false;
    this.messageSent = false;
    this.error = false;
  }

  ngOnInit() {
    this.model = new Email();
  }

  onSubmit() {
    const self = this;
    this.processed = true;
    this.error = false;

    this.emailService
        .sendEmail(this.model)
        .subscribe({
          next(res) {
            self.messageSent = true;
            self.processed = false;
          },
          error(error) {
            self.error = true;
            self.processed = false;
          }
        });
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
