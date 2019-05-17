import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `lit-search-form`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitSearchForm extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lit-search-form',
      },
    };
  }
}

window.customElements.define('lit-search-form', LitSearchForm);
