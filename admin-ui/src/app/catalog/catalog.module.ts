import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { catalogRoutes } from './catalog.routes';
import { CreateOptionGroupDialogComponent } from './components/create-option-group-dialog/create-option-group-dialog.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductResolver } from './providers/routing/product-resolver';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(catalogRoutes),
    ],
    exports: [],
    declarations: [ProductListComponent, ProductDetailComponent, CreateOptionGroupDialogComponent],
    entryComponents: [CreateOptionGroupDialogComponent],
    providers: [ProductResolver],
})
export class CatalogModule {
}