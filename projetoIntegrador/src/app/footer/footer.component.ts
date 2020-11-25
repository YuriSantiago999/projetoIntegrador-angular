import { Component, OnInit } from '@angular/core';
import { faGlobeAmericas, faRecycle, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGlobeAmericas = faGlobeAmericas
  faRecycle = faRecycle
  faUsers = faUsers
  faEnvelope = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

}
