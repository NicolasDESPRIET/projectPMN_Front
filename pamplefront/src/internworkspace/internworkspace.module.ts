import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternworkspaceRoutingModule } from './internworkspace-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { InternworkspacepageComponent } from './components/pages/internworkspacepage/internworkspacepage.component';
import { InternchoiceComponent } from './components/dumb/internchoice/internchoice.component';
import { QcmchoicepanelComponent } from './components/smart/qcmchoicepanel/qcmchoicepanel.component';
import { QcmcardComponent } from './components/dumb/qcmcard/qcmcard.component';


@NgModule({
  declarations: [
    InternworkspacepageComponent,
    InternchoiceComponent,
    QcmchoicepanelComponent,
    QcmcardComponent
  ],
  imports: [
    CommonModule,
    InternworkspaceRoutingModule,
    SharedModule
  ]
})
export class InternworkspaceModule { }
