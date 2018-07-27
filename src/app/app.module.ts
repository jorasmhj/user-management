import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SqrtPipe } from './sqrt.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';
import { SortPeoplePipe } from './sort-people.pipe';
import { UserService } from  './user.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotfoundComponent } from './notfound/notfound.component'
import { routingComponents, appRoutes } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,s
    MenuComponent,
    ContentComponent,
    FooterComponent,
    routingComponents,
    SqrtPipe,
    FilterPipePipe,
    SortPeoplePipe,
    AboutUsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
