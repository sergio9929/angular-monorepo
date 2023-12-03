import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SDateComponent } from './s-date.component';

describe('SDateComponent', () => {
  let component: SDateComponent;
  let fixture: ComponentFixture<SDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
