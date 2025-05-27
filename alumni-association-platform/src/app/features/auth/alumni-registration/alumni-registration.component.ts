import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { profile } from 'console';
import { link } from 'fs';


@Component({
  selector: 'app-alumni-registration',
  imports: [CommonModule,DropdownModule,FormsModule,ReactiveFormsModule,CalendarModule,InputTextModule,FileUploadModule,ButtonModule],
  templateUrl: './alumni-registration.component.html',
  styleUrl: './alumni-registration.component.scss'
})
export class AlumniRegistrationComponent implements OnInit {
  registrationForm! :FormGroup;

  genderOptions = ["Male" , "Female", "Other"];
  departmentOptions = ["Computer Science Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Electronics and Telecommunication Engineering"];
  jobProfileOptions = ["IT", "Finance", "Marketing", "Operations", "Human Resources", "Enterpreneurship", "Private Sector"];

  constructor(private fb: FormBuilder) { }
    ngOnInit() {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      dob : ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      profilePicture: [''],

      email : ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      linkedinProfile: ['', Validators.required],
      githubProfile: ['', Validators.required],

      prnNumber: ['', Validators.required],
      underGraduateDegree: ['', Validators.required],
      underGraduateInstitute: ['', Validators.required],
      underGraduateGraduationYear: ['', Validators.required],
      postGraduateDegree: [''],
      postGraduateInstitute: [''],
      postGraduateGraduationYear: [''],
      department : ['', Validators.required],

      companyName: ['', Validators.required],
      experience: ['', Validators.required],
      position : ['', Validators.required],
      skills: ['', Validators.required],

      emergencyContact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      jobProfile: ['', Validators.required]


    });
  }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}


