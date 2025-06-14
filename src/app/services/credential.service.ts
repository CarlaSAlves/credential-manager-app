import { Injectable } from '@angular/core';
import { Credential } from '../models/credential.model';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
 private readonly STORAGE_KEY = 'credentials';

  constructor() { }

  /**
   * Get all credentials from local storage
   */ 
  getCredentials(): Credential[] {
    const storeData = localStorage.getItem(this.STORAGE_KEY);
    return storeData ? JSON.parse(storeData) : [];
  }


  /**
   * @param credential - The credential to add, excluding the 'id' field.
   * The 'id' will be generated automatically.
   * @returns 
   */
  addCredential(credential: Omit<Credential, 'id'>): Credential  {
    const credentials = this.getCredentials();
    const newCredential: Credential = {
      ...credential,
      id: this.generateId()
    };
    credentials.push(newCredential);
    this.saveCredentials(credentials);
    return newCredential;
  }

  /**
   * Removes a credential by its ID.
   * @param id - The ID of the credential to remove.
   */
  removeCredential(id: string): void {
    const credentials = this.getCredentials();
    const updatedCredentials = credentials.filter(cred => cred.id !== id);
    this.saveCredentials(updatedCredentials);
  }

  /**
   * Saves the credentials to local storage.
   * @param credentials - Array of credentials to save.
   */
  private saveCredentials(credentials: Credential[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(credentials));
  }

  /**
   * Generates a unique ID for a new credential.
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
