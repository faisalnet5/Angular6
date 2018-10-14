import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../app.sharedservice'

@Component({
  selector: 'app-chapter-two',
  templateUrl: './chapter-two.component.html',
  styleUrls: ['./chapter-two.component.css']
})
export class ChapterTwoComponent implements OnInit {

	constructor(private sharedService: SharedService) { }

	sharedMessage: string;

	ngOnInit() {
		//Lesson Three (L-3, M-4): Getting message from Shared Service & Broadcast message globally
		this.sharedService.currentMessage.subscribe(messageSource => this.sharedMessage = messageSource);
	}

  	//Lesson Three (L-3, M-1): Getting data from Parent
	@Input() messageFromParent: string; 

	//Lesson Three (L-3, M-2): Sending data to Parent
	sendMessageToParent: string = "This message is from Component-Two";  //Step-1

	@Output() messageEvent = new EventEmitter<string>();   				//Step-2

	sendMessage(){														//Step-3
		this.messageEvent.emit(this.sendMessageToParent);
	}

	//Lesson Three (L-3, M-3): Sending data to Parent via @ViewChild
	sendAnotherMessageToParent: string = "This message is from Component-Two via @ViewChild";  

	//Lesson Three (L-3, M-4): Getting message from Shared Service & Broadcast message globally
	newMessage(){
		this.sharedService.changeMessage("Angular 6 is so cool!");
	}

}
