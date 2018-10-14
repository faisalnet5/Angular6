import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwoComponent } from './chapter-two.component';

describe('LessonTwoComponent', () => {
  let component: ChapterTwoComponent;
  let fixture: ComponentFixture<ChapterTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
