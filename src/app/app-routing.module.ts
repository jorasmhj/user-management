import {Routes} from '@angular/router'

import { ContentComponent } from './content/content.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { NotfoundComponent } from './notfound/notfound.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'

export const appRoutes : Routes = [
  { path : '', component :HomeComponent },
  { path : 'about', component :AboutUsComponent },
  { path : 'content', component :ContentComponent },
  { path : 'footer', component :FooterComponent },
  { path : 'notfound', component :NotfoundComponent },
  { path : 'login', component :LoginComponent },
  { path : 'signup', component :SignupComponent },
  { path : '**', pathMatch : 'full', redirectTo : '/notfound' }
];
