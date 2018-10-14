import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterOneComponent } from './chapter-one.component';

describe('LessonOneComponent', () => {
  let component: ChapterOneComponent;
  let fixture: ComponentFixture<ChapterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
