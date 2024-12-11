import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win1',
  standalone: true,
  imports: [],
  templateUrl: './win1.component.html',
  styleUrl: './win1.component.css'
})

export class Win1Component {

  constructor(private router: Router) {}
  private worker!: SharedWorker;
  private port!: MessagePort;

  ngOnInit(){
    this.worker = new SharedWorker(new URL('worker.js', import.meta.url));
    this.port = this.worker.port;
    this.port.start(); 
    this.port.onmessage = (event) => {
      console.log('Stato condiviso ricevuto:', event.data);
    };
  }

  openwin2(){
    const url = this.router.serializeUrl(this.router.createUrlTree(['/win2']));
    window.open(url, '_blank');
  }
}
