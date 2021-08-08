import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
// tslint:disable: variable-name
import {HostBinding, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { Job } from 'src/app/interfaces';
import { TagService } from 'src/app/services/tag.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.job, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('1s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('1300ms ease-out', style({ opacity: 1, width: '*', height: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('1s ease-out', style({ opacity: 0, height: '0px' })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class JobsComponent implements OnInit, AfterViewInit {
  @Input() ResumeJobs: any;
  jobs;
  constructor(public tagService: TagService) {
   }

  ngOnInit(): void {    
  }

  ngAfterViewInit() {
    this.jobs = this.ResumeJobs.jobs;

    // this.tagService.activeTagRegistry$.subscribe(at => {
    //   // console.log(at);
    //   let keys = Object.keys(at);
    //   let searchQuery = '';
    //   keys.map(key => searchQuery = searchQuery + " " + at[key]);
    //   this.CriteriaInput.nativeElement.value = searchQuery;
    //   this.updateCriteria(searchQuery)
    // });
  }


  updateCriteria(criteria: string) {
    // criteria = criteria ? criteria.trim() : '';
    
    // this._jobs = this.JOBS.filter(job => this.checkAgainstCriteria(job.description.toLowerCase(), this.splitCriteria(criteria)));
    // // .includes(criteria.toLowerCase()));

    // // console.log(this._jobs,this.JOBS,criteria);
    // const newTotal = this.jobs.length;

    // if (this.jobTotal !== newTotal) {
    //   this.jobTotal = newTotal;
    // } else if (!criteria) {
    //   this.jobTotal = -1;
    // }
  }

  checkAgainstCriteria(subject, criteria) {
    let pass = false;
    criteria.forEach(c => {
      if (subject.toLowerCase().includes(c.toLowerCase())) {
        console.log(c, 'passed');
        pass = true;
        return pass;
      }
    })
    return pass;
  }

  splitCriteria(criteria) {
    return criteria.split(" ");
  }
}
