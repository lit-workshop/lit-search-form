import { LitElement, html, css } from 'lit-element';
import "lit-input-styles/lit-input-styles";
import "lit-button-styles/lit-button-styles";

/**
 * `lit-search-form`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitSearchForm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        --primary-color: var(--search-form-primary-color, #0d47a1);
        --primary-light-color: var(--search-form-primary-light-color, #5472d3);
        --secundary-color: var(--search-form-secundary-color, #6a1b9a);
        --neutral-color: var(--search-neutral-color, #ccc);
        --font-color: var(--search-form-font-color, #ffffff);
        --font-weight: var(--search-form-font-weight, 600);
        --font-size: var(--search-form-font-size, 20px);
        --font-size-small: var(--serach-form-font-size-small, 12px);
      }

      .search-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .field {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .button-search {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .btn.primary {
        color: var(--font-color);
        background-color: var(--primary-color);
      }
    `;
  }

  static get properties() {
    return {
      label: { type: String },
      textButton: { type: String }
    }
  }

  render() {
    return html`
      <lit-input-styles></lit-input-styles>
      <lit-button-styles></lit-button-styles>
      <form class="search-form" @submit="${this.submitHandler}">
        <div class="field">
          <label for="input-search">${this.label}</label>
          <input type="text" class="input-text" name="input-search" />
        </div>
        <div class="button-search">
          <button class="btn primary">${this.textButton}</button>
        </div>
      </form>
    `;
  }

  submitHandler(event) {
    event.preventDefault();
    const input = this.shadowRoot.querySelector('.input-text');
    const searchEvent = new CustomEvent(
      'search-event',
      {
        bubbles: true,
        composed: true,
        detail: {
          query: input.value
        }
      }
    )

    this.dispatchEvent(searchEvent);
  }
}

window.customElements.define('lit-search-form', LitSearchForm);
