import { Router } from '@angular/router';
import { IuserProgress } from './../../Interfaces/IuserProgress';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/Data/data.service';
import { Timestamp, timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
	selector: 'app-add-progress',
	templateUrl: './add-progress.page.html',
	styleUrls: [ './add-progress.page.scss' ]
})
export class AddProgressPage implements OnInit {
	private progressToAdd: IuserProgress = {};

	constructor(private dataSv: DataService, private router: Router) {}

	ngOnInit() {}
	private addProgress() {
		let date = new Date();
		this.progressToAdd.date = new Date().toDateString();
		this.dataSv.addProgress(this.progressToAdd);
		this.router.navigateByUrl('/see-progress');
	}
}
