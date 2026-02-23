import {minLength, required, schema} from '@angular/forms/signals';
import {SignInModel} from './sign-in-model';

export const signInSchema = schema<SignInModel>(p => {
  required(p.username, {message: 'Username is required'});
  required(p.password, {message: 'Password is required'});
  minLength(p.password, 3, {message: 'Password must be at least 3 characters'})
})
