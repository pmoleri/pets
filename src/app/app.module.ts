import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterView2Component } from './master-view2/master-view2.component';
import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSliderModule, IgxButtonGroupModule, IgxCalendarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MasterView1Component } from './master-view1/master-view1.component';
import { MasterView3Component } from './master-view3/master-view3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MasterView2Component,
    MasterView1Component,
    MasterView3Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    FormsModule,
    IgxSliderModule,
    IgxButtonGroupModule,
    IgxCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
