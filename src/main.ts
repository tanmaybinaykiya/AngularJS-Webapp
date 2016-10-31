import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppModule } from './app/app.module';
// import { AdminGuard , ParentGuard, SuperAdminGuard } from './app/security';
// import { APP_SERVICES } from './app/shared';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [
    // These are dependencies of our App
    // ...HTTP_PROVIDERS,
    ...ENV_PROVIDERS,
    // ...APP_ROUTER_PROVIDERS,
    // ...APP_SERVICES,
    // AdminGuard, ParentGuard, SuperAdminGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // use #/ routes, remove this for HTML5 mode
]).catch(err => console.error(err));
