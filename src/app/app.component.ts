import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            console.log(event);
        });
    }
}
