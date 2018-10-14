import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-chapter-three',
  templateUrl: './chapter-three.component.html',
  styleUrls: ['./chapter-three.component.css']
})
export class ChapterThreeComponent implements OnInit {

	selectedIndex:number;  ////C-3; L-4 (Angular Material Tabs related)

	constructor( private router: Router ) { 
		this.selectedIndex = 1;
	}

	@ViewChild('firstInput') firstInput: ElementRef; //C-3; L-4 (Accessing Input Element)
	@ViewChild('f') sample_form: NgForm; 

	loading: boolean = false;

	valurOfFirstInput: string = "";
	valurOfSecondInput: string = "";  

	userSelectedRadioButton: string = "";
	log: string = "";
	two_way_data: string = "Excellence Framework!"; //C-3; L-4 (Two Way Data Binding)

	radioItems = 'One Two Three'.split(' '); //C-3; L-4 (Radio)
	radioModel = { options: 'One' };

	checkItems = 'Apple Orange Mango'.split(' '); //C-3; L-4 (Checkbox)
	checkModel = { options: 'Apple' };
	selectedItemsChecked = [];

	stateArray = [];

	formData = {
		zip_code: '',
		state: ''
	};

	drop_dowm_list: any = [
	    {id: 1, name: 'Sun'},
	    {id: 2, name: 'Moon'},
	    {id: 3, name: 'Star'}
	];
  	
  	current_drop_down_value = 2;

  	selected_drop_down_item: string = "";

	ngOnInit() {
		this.valurOfFirstInput = this.firstInput.nativeElement.value; //C-3; L-4
		this.valurOfSecondInput = (<HTMLInputElement>document.getElementById("check_element")).value; //C-3; L-4

		this.userSelectedRadioButton = this.radioModel.options;
		this.log = this.checkModel.options + ' is checked';
		this.selectedItemsChecked.push('Apple');
		(<HTMLInputElement>document.getElementById("input_program")).value = "Love this Framework!"; //C-3; L-4

		this.selected_drop_down_item = this.drop_dowm_list.find((item: any) => item.id === 2).name;

		this.stateArray = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	}

	//RadioButton related
	passRadioValue(item){
		this.userSelectedRadioButton = item;
	}

	//CheckBox related
	passCheckValue(status: any, item, index){

		this.log = "";
		
		if(status.currentTarget.checked === true){
			this.log += item + ' is checked';
			this.selectedItemsChecked.push(item)
		}else{
			this.log += item + ' is unchecked';

			for(var i = 0; i < this.selectedItemsChecked.length; i++){
				if(item === this.selectedItemsChecked[i].toString()){
					this.selectedItemsChecked.splice(i, 1);
				}
			}
		}
	}

	//Drop-down list related
	selectedDropdownItem(id: number): void {
		this.selected_drop_down_item = this.drop_dowm_list.find((item: any) => item.id === +id).name;
	}

	//Angular Material Tabs related
	items= [
      {label:'First',content:'This is Content 1'},
      {label:'Second',content:'This is Content 2'},
      {label:'Third',content:'This is Content 3'}
    ];

    changeTab($event){
    	console.log('index => ', $event.index);
    	this.selectedIndex = $event.index;
    }

    passFormValues(){
    	//console.log(this.sample_form.value.zip_code);
    	//console.log(this.sample_form.value.state); 

    	this.formData.zip_code = this.sample_form.value.zip_code;
    	this.formData.state = this.sample_form.value.state; 

    	this.sample_form.reset({
    		zip_code: '',
			state: ''
    	});	
    }

    loadImage($event){
    	this.loading = true;
    	setTimeout(()=>{
    		this.loading = false;
      		this.router.navigate(['/loadimage']);
 		}, 2000); 	 
    }
}
