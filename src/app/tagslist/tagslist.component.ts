import { Component, Input, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tagslist',
  templateUrl: './tagslist.component.html',
  styleUrls: ['./tagslist.component.scss']
})
export class TagslistComponent implements OnInit {
@Input() tagRegistry: any;
  constructor(public tagService: TagService) {
    console.log(this.tagRegistry);
    this.tagService.tagRegistry$.subscribe(console.log);
   }

  ngOnInit(): void {
  }

}
