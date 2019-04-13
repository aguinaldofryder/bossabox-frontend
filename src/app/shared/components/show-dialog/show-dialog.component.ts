import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToolModel } from 'src/app/models/tool';
import { DataDialog } from './data-dialog';
import { MessageType } from './message-type';

@Component({
    selector: 'show-dialog',
    templateUrl: 'show-dialog.component.html'
})

export class ShowDialogComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DataDialog,
        public dialogRef: MatDialogRef<ToolModel>
    ) { }

    ngOnInit() { }

    get isQuestion(): boolean {
        return MessageType.QUESTION_MESSAGE == this.data.type;
    }
}