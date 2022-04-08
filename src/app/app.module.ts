import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserCardComponent } from './signup/user-card/user-card.component';
import { DropdownComponent } from './signup/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { AddUserCardComponent } from './add-user-card/add-user-card.component';
import { BlankCardComponent } from './blank-card/blank-card.component';
import { TemplateEditorComponent } from './template-editor/template-editor.component';
import { RatingColumnComponent } from './rating-column/rating-column.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserCardComponent,
    DropdownComponent,
    DashboardComponent,
    SideBarComponent,
    CreateTemplateComponent,
    AddUserCardComponent,
    BlankCardComponent,
    TemplateEditorComponent,
    RatingColumnComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
