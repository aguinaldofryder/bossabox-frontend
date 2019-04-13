import { MatDialog } from '@angular/material';
import { MessageType } from './message-type';
import { Injectable } from '@angular/core';
import { ShowDialogComponent } from './show-dialog.component';
import { DataDialog } from './data-dialog';

@Injectable()
export class OpenDialogService {

    constructor(private dialog: MatDialog) { }

    showConfirmDialog(message: string, title: string) {
        return this.showDialog({ title, message, type: MessageType.QUESTION_MESSAGE });
    }

    showMessageDialog(message: string, title: string) {
        return this.showDialog({ title, message, type: MessageType.INFORMATION_MESSAGE });
    }

    private showDialog(data: DataDialog) {
        return this.dialog.open(ShowDialogComponent, { data }).afterClosed();
    }
}