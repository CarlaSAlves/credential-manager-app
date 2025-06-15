import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOfContext } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms'; 
import { Credential } from '../../models/credential.model';
import { CredentialService } from '../../services/credential.service';

@Component({
  selector: 'app-credential-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './credential-list.component.html',
  styleUrls: ['./credential-list.component.scss'] 
})
export class CredentialListComponent implements OnInit {
  credentials: Credential[] = [];

  newCredential: Omit<Credential, 'id'> = {
    service: '',
    username: '',
    password: ''
  };
  
  constructor(private credentialService: CredentialService) { }


  ngOnInit(): void {
    this.loadCredentials();
  }

  loadCredentials(): void {
    this.credentials = this.credentialService.getCredentials();
  }

  addCredential(form: NgForm): void {
    if (this.newCredential.service && this.newCredential.username && this.newCredential.password) {
      this.credentialService.addCredential(this.newCredential);
      form.resetForm();
      this.newCredential = { service: '', username: '', password: '' }; // Reset form
      this.loadCredentials();
      alert('Credential added successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  } 



  removeCredential(id: string): void {
    if (confirm('Are you sure you want to remove this credential?')) {
      this.credentialService.removeCredential(id);
      this.loadCredentials();
    }
  }
}
