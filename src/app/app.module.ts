import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from './pokemon.service';
import { PokemonGridWithControlsComponent } from './pokemon-grid-with-controls/pokemon-grid-with-controls.component';
import { PokemonImageCarouselComponent } from './pokemon-image-carousel/pokemon-image-carousel.component';
import { ImagesPipe } from './images.pipe';
import { BadgeBgPipe } from './badge-bg.pipe';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    BadgeBgPipe,
    ImagesPipe,
    AboutUsComponent,
    PokemonComponent,
    PokemonCardComponent,
    PokemonGridWithControlsComponent,
    PokemonImageCarouselComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PokemonService],
})
export class AppModule {}
