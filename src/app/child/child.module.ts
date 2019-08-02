import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PageOneComponent, PageTwoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'one',
                component: PageOneComponent
            },
            {
                path: 'two',
                component: PageTwoComponent
            }
        ])
    ]
})
export class ChildModule {}
