import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-aboutus',
	templateUrl: './aboutus.component.html',
	styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

	private company:boolean = true;
	private product:boolean = false;
	constructor() { }

	ngOnInit(): void {
	}

	selectClassComp(){
		if(this.company)
		{
			return 'btn btn-light text-dark';
		}
		else
		{
			return 'btn btn-dark text-light';
		}
	}

	selectClassProd(){
		if(this.product)
		{
			return 'btn btn-light text-dark';
		}
		else
		{
			return 'btn btn-dark text-light';
		}
	}

	selectBtn(btnFlag:string){
		if(btnFlag=='comp')
		{
			this.company = true;
			this.product = false;
		}
		else if(btnFlag=='prod')
		{
			this.product = true;
			this.company = false;
		}
	}

}
