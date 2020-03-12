import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: [ './menu.page.scss' ]
})
export class MenuPage implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	public goProgress() {
		this.router.navigateByUrl('/see-progress');
	}
}
