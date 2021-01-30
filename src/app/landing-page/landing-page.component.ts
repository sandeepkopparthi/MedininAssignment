import { Overlay } from '@angular/cdk/overlay';
import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // @ViewChild('overlayTemplate') overlayTemplate: TemplateRef<any>;



  faSearch = faSearch;
  faCalendarAlt = faCalendarAlt
  faUserInjured = faUserInjured;
  faUserCircle = faUserCircle;
  faEdit = faEdit;

  isOverlayOpened: boolean = false;
  overlayRef;

  list = [
    { icon: 'faUserInjured', listItem: 'All Patients' },
    { icon: 'faCalendarAlt', listItem: 'Appointment' },
    { icon: 'dashboard', listItem: 'Dashboard' },
  ]

  patientsList = ['Baskar Rao', 'Sunil P', 'Neeraj Nanda', 'Suresh Pattu', 'Pooja Fernandes', 'Pooja Fernandes'
  ]

  constructor(public overlay: Overlay, private _viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  onAddPatient(overlayTemplate: TemplateRef<any>) {
    this.isOverlayOpened = true;
    this.overlayRef = this.overlay.create({
      // hasBackdrop: true,
      // backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay.position().global().centerHorizontally()
    });
    const userProfilePortal = new TemplatePortal(overlayTemplate, this._viewContainerRef);
    this.overlayRef.attach(userProfilePortal);

  }

  onOverLayClosed() {
    this.isOverlayOpened = false;
    this.overlayRef.detach();
  }


}
