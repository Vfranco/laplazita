import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { ServicesComponent } from './services/services.component';
import { MetricsComponent } from './metrics/metrics.component';
import { TestimonysComponent } from './testimonys/testimonys.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TeamComponent } from './team/team.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturesComponent } from './features/features.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
	declarations: [
		AboutComponent,
		ScreenshotsComponent,
		ServicesComponent,
		MetricsComponent,
		TestimonysComponent,
		ContactusComponent,
		TeamComponent,
		SliderComponent,
		FeaturesComponent,
		DownloadComponent		
	],
	imports: [
		CommonModule
	],
	exports: [
		AboutComponent,
		ScreenshotsComponent,
		ServicesComponent,
		MetricsComponent,
		TestimonysComponent,
		ContactusComponent,
		TeamComponent,
		SliderComponent,
		FeaturesComponent,
		DownloadComponent
	]
})
export class LayoutModule { }
