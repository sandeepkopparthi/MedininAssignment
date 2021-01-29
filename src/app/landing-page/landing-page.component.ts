import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faSearch = faSearch;
  faCalendarAlt = faCalendarAlt
  faUserInjured = faUserInjured;
  faUserCircle = faUserCircle;
  list = [
    { icon: 'faUserInjured', listItem: 'All Patients' },
    { icon: 'faCalendarAlt', listItem: 'Appointment' },
    { icon: 'dashboard', listItem: 'Dashboard' },
  ]

  patientsList = ['Baskar Rao', 'Sunil P', 'Neeraj Nanda', 'Suresh Pattu', 'Pooja Fernandes', 'Pooja Fernandes'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
