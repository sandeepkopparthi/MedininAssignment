import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal'



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    OverlayModule,
    PortalModule,
    FontAwesomeModule
  ],
  exports: [LandingPageComponent],
  providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }]
})
export class LandingPageModule { }
