import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTagsListComponent } from './all-tags-list.component';

describe('AllTagsListComponent', () => {
  let component: AllTagsListComponent;
  let fixture: ComponentFixture<AllTagsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTagsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTagsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
