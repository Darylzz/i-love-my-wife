import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ConfirmationService],
})
export class AppComponent {
  valueOfQuestion!: boolean;

  constructor(private confirmationService: ConfirmationService) {}

  onClickButton(key: string) {
    if (key === 'yes') {
      this.valueOfQuestion = true;
    } else {
      this.confirmationService.confirm({
        key: 'click-no',
        acceptVisible: false,
        rejectVisible: false,
        accept: () => {
          alert('แกต๊ายยยยยยยยยยยยยยยยยยยยยยยยยยยยยยยย');
          setTimeout(() => {
            alert('ให้โอกาสตอบใหม่');
          }, 1000);
        },
        reject: () => {},
      });
    }
  }
}
