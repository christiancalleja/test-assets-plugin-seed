import { Component, NgZone } from '@angular/core';
import { DemoSharedTestAssetsAndroid } from '@demo/shared';
import {} from '@redmint/test-assets-android';

@Component({
  selector: 'demo-test-assets-android',
  templateUrl: 'test-assets-android.component.html',
})
export class TestAssetsAndroidComponent {
  demoShared: DemoSharedTestAssetsAndroid;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTestAssetsAndroid();
  }
}
