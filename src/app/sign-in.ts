import {Component, inject, model} from '@angular/core';
import {SignInModel} from './sign-in-model';
import {signInSchema} from './sign-in-schema';
import {SignInService} from './sign-in.service';
import {firstValueFrom} from 'rxjs';
import {form, FormField, submit} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './sign-in.html',
  imports: [
    FormField,
    JsonPipe
  ]
})
export class SignIn {
  readonly #signIn = inject(SignInService);

  protected readonly signInModel = model<SignInModel>({
    username: '',
    password: ''
  });

  protected readonly form = form<SignInModel>(this.signInModel, signInSchema);

  async onSubmit(e: Event): Promise<void> {
    e.preventDefault(); // Caution: Use this to prevent browser refresh on submission!

    await submit(this.form, async (form) => {
      try {
        console.log(form().value());
        await firstValueFrom(this.#signIn.fakeSignIn(form().value())).then((result: SignInModel) => {
          if (!result) {
            console.log('Sign in failed');
            return;
          }

          alert('Login successful');
        });
        return null;
      } catch (err) {
        return {
          kind: "processing_error",
          error: String(err),
        };
      }
    })
  }
}
