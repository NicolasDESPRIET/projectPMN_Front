import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HerointernComponent } from './herointern/herointern.component';
import { FilterbypipePipe } from './pipes/filterbypipe.pipe';
import { SearchtitlepipePipe } from './pipes/searchtitlepipe.pipe';
import { SortbypipePipe } from './pipes/sortbypipe.pipe';




@NgModule({
  declarations: [
    HeroComponent,
    HerointernComponent,
    FilterbypipePipe,
    SearchtitlepipePipe,
    SortbypipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HerointernComponent,
    SearchtitlepipePipe,
    FilterbypipePipe,
    SortbypipePipe
  ]
})
export class SharedModule { }
