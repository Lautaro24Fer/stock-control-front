import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteModalComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteModalComponent>)
}
