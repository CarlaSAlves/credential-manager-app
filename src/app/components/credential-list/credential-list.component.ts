import { Component } from '@angular/core';
import { CredentialService } from '../../services/credential.service';

@Component({
  selector: 'app-credential-list',
  templateUrl: './credential-list.component.html',
  styleUrls: ['./credential-list.component.scss']  
})
export class CredentialListComponent {
  credentials: Credential[] = [];

  constructor(private credentialService: CredentialService) { }

  ngOnInit() {
    this.loadCredentials();
  }
  
  /**get credentials to the service */
  loadCredentials(): void {
    this.credentialService.getCredentials();
  }

      /**Remove credentials by id */
  removeCredential(id: string): void {
      if(confirm('Are you sure you want to delete this credential?')) {
          // Call the service to remove the credential    
        this.credentialService.removeCredential(id);
         // Reload the credentials after deletion
        this.loadCredentials();
        }   
      }
}
