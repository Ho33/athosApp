import { IuserProgress } from './../../Interfaces/IuserProgress';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private progressCollection: AngularFirestoreCollection<IuserProgress>;
	private userId: string;
	constructor(private fireSv: AngularFirestore, private authSv: AngularFireAuth) {
		this.userId = this.authSv.auth.currentUser.uid;
		console.log(this.userId);
		this.progressCollection = this.fireSv.collection('users').doc(this.userId).collection('progress');
	}

	addProgress(progress: IuserProgress) {
		return this.progressCollection.add(progress);
	}
	getAllProgress() {
		return this.progressCollection.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				});
			})
		);
	}

	getSeletedProgress(progressId: string) {
		return this.progressCollection
			.doc<IuserProgress>('progressId')
			.valueChanges()
			.subscribe((data: IuserProgress) => {
				return data;
			});
	}
}
