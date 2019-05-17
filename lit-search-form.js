import { LitElement, html } from 'lit-element';

/**
 * `lit-search-form`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitSearchForm extends LitElement {
  render() {
    return html`
      <h1>Search form</h1>
    `;
  }
}

window.customElements.define('lit-search-form', LitSearchForm);
