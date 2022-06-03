import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
('./user-auth/user-auth.module');
import { RegularComponentComponent } from './regular-component/regular-component.component';
import { InlineUserComponent } from './inline-user/inline-user.component';
import { TemplateUserComponent } from './template-user/template-user.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegularComponentComponent,
    InlineUserComponent,
    TemplateUserComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, UserAuthModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
