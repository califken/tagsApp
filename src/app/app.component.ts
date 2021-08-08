import { Component, OnInit } from '@angular/core';
import { Job, Tag, Resume } from './interfaces';
import { UtilService } from './services/util.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UtilService]
})
export class AppComponent implements OnInit {
  title = 'tagsApp';

  employmentHistory: Job[];

  constructor(public utilService: UtilService) {
    console.log(this.utilService.generateUUID());


  }

  ngOnInit() {

  }


}
