import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxInputGroupModule, IgxSelectModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    HomeComponent,
    MyInfoComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxListModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSelectModule
  ]
})
export class MasterViewModule {
}
