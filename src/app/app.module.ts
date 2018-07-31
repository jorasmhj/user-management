import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SqrtPipe } from './sqrt.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';
import { SortPeoplePipe } from './sort-people.pipe';
import { UserService } from  './user.service'
import { AboutUsComponent } from './about-us/about-us.component'
import { NotfoundComponent } from './notfound/notfound.component'
<<<<<<< HEAD
import { routingComponents, appRoutes } from './app-routing.module'
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { SquarePipe } from './square.pipe'
=======
import { routingComponents, appRoutes } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
>>>>>>> 9e83b26e2f2bf7e307ff1841602c89c6a742284f

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    routingComponents,
    SqrtPipe,
    FilterPipePipe,
    SortPeoplePipe,
    AboutUsComponent,
    NotfoundComponent,
    HomeComponent,
<<<<<<< HEAD
    SquarePipe
=======
    LoginComponent,
    SignupComponent
>>>>>>> 9e83b26e2f2bf7e307ff1841602c89c6a742284f
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
