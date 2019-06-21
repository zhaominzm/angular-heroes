import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';  
import { DetailFComponent } from './detail-f/detail-f.component';

import { RouteReuseStrategy } from '@angular/router';
import { SimpleReuseStrategy } from './SimpleReuseStrategy';


@NgModule({
   declarations: [
      AppComponent,
      MyComponentComponent,
      SearchComponent,
      DetailComponent,
      DetailFComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
         {path:'',component:SearchComponent},
         {path:'detail/:0',component:DetailComponent,data:{keep:true}},
         {path:'detailf',component:DetailFComponent}
      ])

   ],
   providers: [
      /* 路由复用策略 */
      {provide:RouteReuseStrategy,useClass:SimpleReuseStrategy}
      ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
