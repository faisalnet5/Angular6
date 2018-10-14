import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterThreeComponent } from './chapter-three.component';

describe('ChapterThreeComponent', () => {
  let component: ChapterThreeComponent;
  let fixture: ComponentFixture<ChapterThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
