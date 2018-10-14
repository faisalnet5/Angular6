import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChapterFourService{

	constructor( private http: HttpClient ){};

	dataUrl = 'assets/data/books.json';

	getData(){
		return this.http.get(this.dataUrl);
	}

}