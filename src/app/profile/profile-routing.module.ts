import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditprofileComponent } from '../profile/editprofile/editprofile.component';
import { SettingsComponent } from '../profile/settings/settings.component';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  { 
    path: 'editprofile', 
    component: EditprofileComponent 
  },
  { 
    path: 'settings', 
    component: SettingsComponent 
  },
];

@NgModule({
  declarations: [EditprofileComponent, SettingsComponent],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
