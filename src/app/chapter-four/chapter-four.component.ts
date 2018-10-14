import { Component, OnInit } from '@angular/core';

import { ChapterFourService } from '../../app/chapter-four/chapter-four.service';

@Component({
  selector: 'app-chapter-four',
  templateUrl: './chapter-four.component.html',
  styleUrls: ['./chapter-four.component.css'],
  providers: [ ChapterFourService ]
})
export class ChapterFourComponent implements OnInit {

  constructor( private chapterFourService: ChapterFourService ) { }

  booksInfo: any = [];

  ngOnInit() {
  	this.chapterFourService.getData()
  	 .subscribe(
          (response: Response) => {
          	//console.log(response)
          	this.booksInfo = response;
          },
          (error) => console.log(error)
        );
  }

}
