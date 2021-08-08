import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagComponent } from './tags/tag/tag.component';
import { JobComponent } from './resume/jobs/job/job.component';
import { JobsComponent } from './resume/jobs/jobs/jobs.component';
import { ResumeComponent } from './resume/resume/resume.component';
import { TagsComponent } from './tags/tags/tags.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { TagslistComponent } from './tagslist/tagslist.component';
import { ContentTagComponent } from './tag/content-tag/content-tag.component';
import { TagItemComponent } from './tags/tag-item/tag-item.component';
import { HighlightPipe } from './highlight.pipe';
import { AllTagsListComponent } from './all-tags-list/all-tags-list.component';
import { MarkComponent } from './mark/mark.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    JobComponent,
    JobsComponent,
    ResumeComponent,
    TagsComponent,
    HeroListPageComponent,
    TagslistComponent,
    ContentTagComponent,
    TagItemComponent,
    HighlightPipe,
    AllTagsListComponent,
    MarkComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
