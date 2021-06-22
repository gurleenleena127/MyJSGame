import { LightningElement, api } from 'lwc';

export default class DrawShapes extends LightningElement {
    @api surface;
    @api color ;
    get backgroundColor() {
        return `background: ${this.color};`;
    }
}