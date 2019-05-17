import { LitElement, html, css } from 'lit-element';

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

      .input-search {
        border: 1px solid var(--neutral-color);
        font-size: var(--font-size);
        margin: 5px 0px;
        border-radius: 4px;
      }

      .input-search:focus {
        outline: none;
        border: 2px solid var(--primary-light-color);
      }

      .button-search {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .btn {
        height: 30px;
        weight: 40px;
        border: 1px solid var(--neutral-color);
        font-size: var(--font-size-small);
        border-radius: 4px;
      }

      .btn.primary {
        color: var(--font-color);
        background-color: var(--primary-color);
      }
    `;
  }

  render() {
    return html`
      <form class="search-form">
        <div class="field">
          <label for="input-search">Search:</label>
          <input type="text" class="input-search" name="input-search" />
        </div>
        <div class="button-search">
          <button class="btn primary">Accept</button>
        </div>
      </form>
    `;
  }
}

window.customElements.define('lit-search-form', LitSearchForm);
