import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMainContentComponentComponent } from './master-main-content-component.component';
import { MainContentComponent } from '../../maincontentComponent/main-content/main-content.component';

describe('MasterMainContentComponentComponent', () => {
  let component: MasterMainContentComponentComponent;
  let fixture: ComponentFixture<MasterMainContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterMainContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
