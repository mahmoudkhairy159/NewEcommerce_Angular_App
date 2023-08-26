import { AdminData } from './adminData.model';

export class Admin {
  constructor(public admin:AdminData = null , private token: string= null,
    private token_expirationDate= null) { }

  public getAuthToken() {
    if (!this.token_expirationDate || new Date(new Date().getTime()) > this.token_expirationDate) {
      return null;
    }
    return this.token;
  }

}
