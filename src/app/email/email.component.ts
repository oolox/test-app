import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})

export class EmailComponent implements OnInit {
  emailForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.emailForm.valid) {
      console.log('Form data:', this.emailForm.value);
    }
  }

  ngOnInit() {
    console.log('ngOnInit');

  }
}

