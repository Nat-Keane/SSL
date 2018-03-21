import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) { }

  public login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }
}
