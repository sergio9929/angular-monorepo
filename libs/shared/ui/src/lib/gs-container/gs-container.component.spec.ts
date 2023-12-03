import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SContainerComponent } from './gs-container.component';

describe('SContainerComponent', () => {
  let component: SContainerComponent;
  let fixture: ComponentFixture<SContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
