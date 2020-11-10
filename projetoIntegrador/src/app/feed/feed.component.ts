import { Component, OnInit } from '@angular/core';
import {faDumpster} from '@fortawesome/free-solid-svg-icons'
import {faGratipay} from '@fortawesome/free-brands-svg-icons'
import {faPen} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  faDumpster = faDumpster
  faGratipay = faGratipay
  faPen = faPen

  constructor() { }

  ngOnInit(): void {
  }

}
