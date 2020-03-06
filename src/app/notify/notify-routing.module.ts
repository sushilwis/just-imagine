import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { NotificationComponent } from './notification/notification.component';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  { 
    path: 'enquery', 
    component: EnquiryComponent
  },
  { 
    path: 'notification', 
    component: NotificationComponent
  },
];

@NgModule({
  declarations: [EnquiryComponent, NotificationComponent],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifyRoutingModule { }
