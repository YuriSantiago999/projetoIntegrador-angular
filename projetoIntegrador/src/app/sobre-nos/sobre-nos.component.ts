import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)
  }

}
