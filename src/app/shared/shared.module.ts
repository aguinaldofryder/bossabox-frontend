import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { OpenDialogService } from './components/show-dialog/open-dialog.service';
import { ShowDialogComponent } from './components/show-dialog/show-dialog.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ShowDialogComponent
    ],
    entryComponents: [
        ShowDialogComponent
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule
    ],
    providers: [
        OpenDialogService
    ]
})
export class SharedModule { }
