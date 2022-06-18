import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileRoutingModule } from './profile-routing';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    InputTextModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
