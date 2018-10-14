import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChapterTwoComponent } from '../chapter-two/chapter-two.component';

import { SharedService } from '../app.sharedservice';

//Lesson One (L-1): Basic on Component
@Component({
  selector: 'app-chapter-one',							//selector name should always be unique. We can define this selector as element or attribute
  //selector: '[app-chapter-one]',
  templateUrl: './chapter-one.component.html',			//We also can use inline template
  styleUrls: ['./chapter-one.component.css'] 	 		//Can refer more than one css files (comma seperated)
  //styles: [`.item_1_style{color: blue}`]				//If we use inline css, that will take the controll of any other css through styleUrls
})
export class ChapterOneComponent implements OnInit {

	//(2) Property Binding (L-2)
	property_bind = true;

	show_message = "On button click, new message will appear here";

	constructor(private sharedService: SharedService) { 
		setTimeout(() => {
			this.property_bind = false;  //Related to Property Binding (L-2) (2)
		}, 5000);
	}

	//Lesson Two (L-2): Databinding - Communication between TS code (Business Logic) and HTML (Template)
	//(1) String Interpolation (L-2)
	message_one: string = "This First mesage is coming from Component-One (TS Code) (String Interpolation through property buinding)";
	message_two: string = "This Second mesage is coming from Component-One (TS Code) (String Interpolation through a functional call)";

	getMessage(){
		return this.message_two;  //Related to Property Binding (L-2 (1))
	}

	//(3) Event Binding (L-2)
	showNewMsg(){
		this.show_message = "Learn Angular by heart";
	}

	enteredMessage: string;		//Related to Property Binding (L-2 (3))
	passMsgOnEvent(event: Event){
		this.enteredMessage = ">> You entered: " + event.toString();
	}

	//(4) Two-Way-Binfing (L-2)
	message_three: string = "";

	//Lesson Three (L-3, M-1): Passing message to Component-Two
	messageForComponentTwo = 'This mesage is from Component-One';

	//Lesson Three (L-3, M-2): Getting message from Component-Two
	messageFromComponentTwo: string = '';

	receiveMessage($event){
		this.messageFromComponentTwo = $event;
	}

	//Lesson Three (L-3, M-4): Getting message from Shared Service
	sharedMessage: string;


	//Lesson Three (L-3, M-3): Getting message from Component-Two by @ViewChild
	viewChildMessage: any;

	@ViewChild(ChapterTwoComponent) chapterTwoComponent;

	ngOnInit(){
		this.viewChildMessage = this.chapterTwoComponent.sendAnotherMessageToParent;

		//Lesson Three (L-3, M-4): Getting message from Shared Service
		this.sharedService.currentMessage.subscribe(messageSource => this.sharedMessage = messageSource);
	}

	//Lesson Three (L-3, M-4): Getting message from Shared Service & Broadcast message globally
	newMessage(){
		this.sharedService.changeMessage("Yes!!! Angular 6 is so cool :)");
	}
}
