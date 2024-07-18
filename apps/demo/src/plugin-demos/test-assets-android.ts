import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTestAssetsAndroid } from '@demo/shared';
import {} from '@redmint/test-assets-android';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTestAssetsAndroid {}
