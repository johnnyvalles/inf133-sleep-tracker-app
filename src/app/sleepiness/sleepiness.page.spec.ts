import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepinessPage } from './sleepiness.page';

describe('Tab3Page', () => {
  let component: SleepinessPage;
  let fixture: ComponentFixture<SleepinessPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SleepinessPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
