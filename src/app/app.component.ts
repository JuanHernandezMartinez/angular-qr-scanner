import { Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

LOAD_WASM().subscribe();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxScannerQrcodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('action') action: any;

  obtener(event: any) {
    this.action.stop();
    console.log(event[0].value);
    window.open(event[0].value, 'blank');
  }
}
