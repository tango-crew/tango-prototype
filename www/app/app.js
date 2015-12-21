import {App, Platform, StatusBar} from 'ionic/ionic';
import {Presentation} from './presentation/presentation';


@App({
  template: '<ion-nav [root]="PresentationRoot"></ion-nav>'
})

export class MyApp {
  constructor() {
    this.PresentationRoot = Presentation;
  }
}
