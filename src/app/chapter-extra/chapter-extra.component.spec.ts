import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterExtraComponent } from './chapter-extra.component';

describe('ChapterExtraComponent', () => {
  let component: ChapterExtraComponent;
  let fixture: ComponentFixture<ChapterExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
