import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { Credential } from '../../models/credential.model';
import { CredentialService } from '../../services/credential.service';

@Component({
  selector: 'app-credential-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './credential-list.component.html',
  styleUrls: ['./credential-list.component.scss'] 
})
export class CredentialListComponent implements OnInit {
  credentials: Credential[] = [];

  constructor(private credentialService: CredentialService) { }

  ngOnInit(): void {
    this.loadCredentials();
  }

  loadCredentials(): void {
    this.credentials = this.credentialService.getCredentials();
  }

  removeCredential(id: string): void {
    if (confirm('Are you sure you want to remove this credential?')) {
      this.credentialService.removeCredential(id);
      this.loadCredentials();
    }
  }
}
