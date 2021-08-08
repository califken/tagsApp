import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagslistComponent } from './tagslist.component';

describe('TagslistComponent', () => {
  let component: TagslistComponent;
  let fixture: ComponentFixture<TagslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
