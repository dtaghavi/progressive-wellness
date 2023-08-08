import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponentRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { SlideshowComponent } from "src/app/_components/slide-show/slideshow.component";

@NgModule({
    imports: [
        CommonModule,
        HomeComponentRoutingModule,
    ],
    declarations: [
        HomeComponent,
        SlideshowComponent
    ]
})
export class HomeComponentModule {}

