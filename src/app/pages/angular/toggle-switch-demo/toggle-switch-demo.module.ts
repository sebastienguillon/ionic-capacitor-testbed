import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToggleSwitchDemoPage } from './toggle-switch-demo.page';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';

const routes: Routes = [
  {
    path: '',
    component: ToggleSwitchDemoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToggleSwitchDemoPage, ToggleSwitchComponent]
})
export class ToggleSwitchDemoPageModule {}
