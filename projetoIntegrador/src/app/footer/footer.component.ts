import { Component, OnInit } from '@angular/core';
import { faGlobeAmericas, faRecycle, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
  faLinkedin = faLinkedin
  faYoutube = faYoutube 

  constructor() { }

  ngOnInit(): void {
  }

}
