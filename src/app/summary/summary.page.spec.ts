import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SummaryPage } from './summary.page';

describe('Tab1Page', () => {
  let component: SummaryPage;
  let fixture: ComponentFixture<SummaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
