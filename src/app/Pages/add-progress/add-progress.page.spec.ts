import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProgressPage } from './add-progress.page';

describe('AddProgressPage', () => {
  let component: AddProgressPage;
  let fixture: ComponentFixture<AddProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
