import { IuserProgress } from './../../Interfaces/IuserProgress';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
	selector: 'app-see-progress',
	templateUrl: './see-progress.page.html',
	styleUrls: [ './see-progress.page.scss' ]
})
export class SeeProgressPage implements OnInit {
	private allProgress: IuserProgress[];

	constructor(private dataSv: DataService) {}

	ngOnInit() {}

	 getAllProgess() {
		 this.dataSv.getAllProgress().subscribe((data) => {
			this.allProgress = data;
		});
	}
}
