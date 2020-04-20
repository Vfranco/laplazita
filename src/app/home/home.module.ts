import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

import { LandingComponent } from './landing/landing.component';

@NgModule({
	declarations: [LandingComponent],
	imports: [
		CommonModule,
		SharedModule,
		LayoutModule
	],
	exports: [LandingComponent]
})
export class HomeModule { }
