import { Component, ElementRef, Input, AfterViewInit, ViewChild, ContentChild } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

import { Job, Tag, Resume } from '../../interfaces';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @ContentChild('tag') tag: ElementRef
}
