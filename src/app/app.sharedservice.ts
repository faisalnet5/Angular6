import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService{

	private messageSource = new BehaviorSubject<string>("Default Message from Shared Service");

	currentMessage = this.messageSource.asObservable();

	changeMessage(message: string){
		this.messageSource.next(message);
	}
}