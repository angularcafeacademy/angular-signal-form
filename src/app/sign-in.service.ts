import {Injectable} from '@angular/core';
import {SignInModel} from './sign-in-model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  fakeSignIn(signInDto: SignInModel): Observable<SignInModel> {
    return of(signInDto);
  }
}
