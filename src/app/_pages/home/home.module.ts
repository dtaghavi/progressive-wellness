import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponentRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        CommonModule,
        HomeComponentRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeComponentModule {}