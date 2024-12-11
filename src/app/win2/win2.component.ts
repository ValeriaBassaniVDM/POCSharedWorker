import { Component } from '@angular/core';

@Component({
  selector: 'app-win2',
  standalone: true,
  imports: [],
  templateUrl: './win2.component.html',
  styleUrl: './win2.component.css'
})
export class Win2Component {

  private worker!: SharedWorker;
  private port!: MessagePort;

  ngOnInit(){
    this.worker = new SharedWorker(new URL('../win1/worker.js', import.meta.url));
    this.port = this.worker.port;
    setInterval(() => {
      this.sendStateToWorker()
    }, 1000);
  }
  
  sendStateToWorker(): void {
    const message = 'Open' ;
    this.port.postMessage(message);
  }
}
