import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent],
  providers: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    };
  }
}
