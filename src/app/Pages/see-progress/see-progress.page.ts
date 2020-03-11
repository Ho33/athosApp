import { IuserProgress } from './../../Interfaces/IuserProgress';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/Data/data.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-see-progress',
	templateUrl: './see-progress.page.html',
	styleUrls: [ './see-progress.page.scss' ]
})
export class SeeProgressPage implements OnInit {
	private allProgress: IuserProgress[];
	private progressSubscription: Subscription;

	constructor(private dataSv: DataService) {
		this.progressSubscription = this.dataSv.getAllProgress().subscribe((data) => {
			this.allProgress = data;
		});
		console.log(this.allProgress);
	}

	ngOnInit() {}

	getAllProgess() {
		this.dataSv.getAllProgress().subscribe((data) => {
			this.allProgress = data;
		});
	}
}
