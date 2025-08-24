import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  sendEmail(event: any) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    emailjs
      .sendForm(
        'service_7n2lh7i',
        'template_qdr04ni',
        event.target,
        'Uxha_VMMzix2mPHT-'
      )
      .then(
        (result: any) => {
          alert('Message sent successfully!');
          event.target.reset();
        },
        (error: any) => {
          alert('Oops, something went wrong.');
          console.log(error.text);
        }
      );
  }
}
