import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TestAssetsAndroidComponent } from './test-assets-android.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TestAssetsAndroidComponent }])],
  declarations: [TestAssetsAndroidComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TestAssetsAndroidModule {}
