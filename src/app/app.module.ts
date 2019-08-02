import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { environment } from 'src/environments/environment';
import { TopComponent } from './top/top.component';

@NgModule({
    declarations: [AppComponent, ContainerComponent, TopComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: ContainerComponent,
                    children: [
                        {
                            path: 'page',
                            loadChildren: (): any =>
                                import('./child/child.module').then(
                                    cm => cm.ChildModule
                                )
                        }
                    ]
                },
                {
                    path: 'top',
                    component: TopComponent
                }
            ],
            { initialNavigation: 'disabled' }
        ),
        NgxsModule.forRoot([], {
            developmentMode: !environment.production
        }),
        NgxsStoragePluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
