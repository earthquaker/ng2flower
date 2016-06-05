import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng2flower-app',
  templateUrl: 'ng2flower.component.html',
  styleUrls: ['ng2flower.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
export class Ng2flowerAppComponent {
  title = 'ng2flower works!';
}
