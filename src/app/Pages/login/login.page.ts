import { IuserLog } from './../../Interfaces/IuserLog';
import { AuthService } from './../../Service/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	private dataLog: IuserLog = {};
	private showPassword: boolean = false;
	private passwordToggleIcon = 'eye';

	constructor(private route: Router, private AuthSv: AuthService) {}

	ngOnInit() {}

	private async logIn() {
		if (await this.AuthSv.logIn(this.dataLog)) {
			// TODO route to userPage
		}
	}

	private togglePassword(): void {
		this.showPassword = !this.showPassword;
		if (this.passwordToggleIcon == 'eye') {
			this.passwordToggleIcon = 'eye-off';
		} else {
			this.passwordToggleIcon = 'eye';
		}
	}
}
