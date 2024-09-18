import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: String }) label = '';

  static styles = css`
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  render() {
    return html`
      <button @click="${this._handleClick}">${this.label}</button>
    `;
  }

  private _handleClick() {
    const event = new CustomEvent('button-click', {
      detail: { message: 'Button clicked!' },
    });
    this.dispatchEvent(event);
  }
}
