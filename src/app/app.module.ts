import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { ProductComponent } from './page/product/product.component';
import { FormComponent } from './page/product/form/form.component';
import { HeadersComponent } from './page/product/headers/headers.component';
import { TableComponent } from './page/product/table/table.component';
import { BaseComponent } from './components/base/base.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { InputValueComponent } from './components/input-value/input-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgMoreVerticalComponent } from './components/svg-more-vertical/svg-more-vertical.component';
import { SvgDeleteComponent } from './components/svg-delete/svg-delete.component';
import { SvgEditComponent } from './components/svg-edit/svg-edit.component';
import { SvgWarningComponent } from './components/svg-warning/svg-warning.component';
import { SvgSuccessComponent } from './components/svg-success/svg-success.component';
import { SvgErrorComponent } from './components/svg-error/svg-error.component';
;

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent,
    ModalComponent,
    FormDeleteComponent,
    BtnPrimaryComponent,
    ProductComponent,
    FormComponent,
    HeadersComponent,
    TableComponent,
    BaseComponent,
    InputSearchComponent,
    InputValueComponent,
    SvgMoreVerticalComponent,
    SvgDeleteComponent,
    SvgEditComponent,
    SvgWarningComponent,
    SvgSuccessComponent,
    SvgErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
