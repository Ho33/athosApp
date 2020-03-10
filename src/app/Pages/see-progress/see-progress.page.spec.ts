import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeProgressPage } from './see-progress.page';

describe('SeeProgressPage', () => {
  let component: SeeProgressPage;
  let fixture: ComponentFixture<SeeProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeProgressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
