import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

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
