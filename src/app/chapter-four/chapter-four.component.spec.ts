import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourComponent } from './chapter-four.component';

describe('ChapterFourComponent', () => {
  let component: ChapterFourComponent;
  let fixture: ComponentFixture<ChapterFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
