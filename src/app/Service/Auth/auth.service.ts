import { IuserLog } from './../../Interfaces/IuserLog';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private authSv: AngularFireAuth) {}

	public logIn(logData: IuserLog) {
		return this.authSv.auth.signInWithEmailAndPassword(logData.email, logData.password);
  }
  public getCurrentUserId(){
    return this.authSv.auth.currentUser.uid;
  }
}
