import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import { ServicesRoutingModule } from './services-routing.module';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ServiceDashboardComponent } from './components/service-dashboard/service-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ServiceFormComponent,
    ServiceDashboardComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TableModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToolbarModule,
    InputTextModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule
  ],
  exports:[ServiceDashboardComponent]
})
export class ServicesModule { }