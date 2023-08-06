import { Component } from '@angular/core';

declare const window: any;

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    connected: boolean = false;
    connected_user?: string;

    get trimmedAddr() {
        if (this.connected_user) return `${this.connected_user.slice(0, 3)}...${this.connected_user.slice(-4)}`
        else return 'Connect Wallet'
    }
    constructor(
    ) {
    }

    handleConnectClick() {
        if (!window.ethereum) {
            alert('Please install MetaMask to use this dApp!');
            return;
        }
    }
}
