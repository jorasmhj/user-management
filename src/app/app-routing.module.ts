import {Routes} from '@angular/router'

import { ContentComponent } from './content/content.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { NotfoundComponent } from './notfound/notfound.component'

export const routingComponents = [
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    NotfoundComponent
]

export const appRoutes : Routes = [
  {path : '', component :HeaderComponent },
  {path : 'about', component :AboutUsComponent },
  {path : 'content', component :ContentComponent },
  {path : 'footer', component :FooterComponent },
  {path : 'notfound', component :NotfoundComponent },
  {path : '**', pathMatch : 'full', redirectTo : '/notfound' }
];
