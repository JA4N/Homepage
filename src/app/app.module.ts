import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { SectionServiceComponent } from './section-service/section-service.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { FooterComponent } from './footer/footer.component';
import { SectionGalleryComponent } from './section-gallery/section-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    SectionHeroComponent,
    SectionServiceComponent,
    SectionProjectsComponent,
    SectionAboutComponent,
    SectionContactComponent,
    FooterComponent,
    SectionGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
