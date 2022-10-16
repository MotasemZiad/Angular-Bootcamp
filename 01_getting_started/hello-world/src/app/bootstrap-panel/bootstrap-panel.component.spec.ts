import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPanelComponent } from './bootstrap-panel.component';

describe('BootstrapPanelComponent', () => {
  let component: BootstrapPanelComponent;
  let fixture: ComponentFixture<BootstrapPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
