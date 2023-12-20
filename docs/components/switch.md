---
name: Switch
dirname: switch
---

<catalog-component-header>
<catalog-component-header-title slot="title">

# Switch

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2023-08-02' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-switch -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/switch/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Switches](https://m3.material.io/components/switch)<!-- {.external} --> toggle the state
of an item on or off.

</catalog-component-header-title>

<img
    class="hero"
    src="./images/switch/hero.png"
    alt="Two switches on a settings page for Wi-Fi and Bluetooth. The first is on and the second is off."
    title="Switches on a settings page.">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/switch) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/switch)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Switches are similar to checkboxes, and can be unselected or selected.

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->


<md-switch></md-switch>
<md-switch selected></md-switch>

```html
<Switch></Switch>
<Switch selected></Switch>
```

### Icons

Icons can be used to visually emphasize the switch's selected state. Switches
can choose to display both icons or only selected icons.

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->


<md-switch icons></md-switch>
<md-switch icons selected></md-switch>

<md-switch icons show-only-selected-icon></md-switch>
<md-switch icons show-only-selected-icon selected></md-switch>

```html
<Switch icons></Switch>
<Switch icons selected></Switch>

<Switch icons showOnlySelectedIcon></Switch>
<Switch icons showOnlySelectedIcon selected></Switch>
```

### Label

Associate a label with a switch using the `<label>` element.

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->


<label>
  Wi-Fi
  <md-switch selected></md-switch>
</label>

<label for="switch">Bluetooth</label>
<md-switch id="switch"></md-switch>

```html
<label>
  Wi-Fi
  <Switch selected></Switch>
</label>

<label for="switch">Bluetooth</label>
<Switch id="switch"></Switch>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to switches without labels or switches whose labels need to be more
descriptive.


<md-switch aria-label="Lights"></md-switch>

<label>
  All
  <md-switch aria-label="All notifications"></md-switch>
</label>

```html
<Switch ariaLabel="lights"></Switch>

<label>
  All
  <Switch ariaLabel="all notifications"></Switch>
</label>
```

> Note: switches are not automatically labelled by `<label>` elements and always
> need an `aria-label`. See b/294081528.

## Theming

Switches supports [Material theming](../theming/README.md) and can be customized
in terms of color and shape.

### Tokens

Token                               | Default value
----------------------------------- | ------------------------------------------
`--md-switch-handle-color`          | `--md-sys-color-outline`
`--md-switch-handle-shape`          | `9999px`
`--md-switch-track-color`           | `--md-sys-color-surface-container-highest`
`--md-switch-track-shape`           | `9999px`
`--md-switch-selected-handle-color` | `--md-sys-color-on-primary`
`--md-switch-selected-track-color`  | `--md-sys-color-primary`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-switch.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->


<style>
  :root {
    /* System tokens */
    --md-sys-color-primary: #006a6a;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-outline: #6f7979;
    --md-sys-color-surface-container-highest: #dde4e3;

    /* Component tokens */
    --md-switch-handle-shape: 0px;
    --md-switch-track-shape: 0px;
  }
</style>

<md-switch></md-switch>
<md-switch selected></md-switch>

```html
<style>
  :root {
    /* System tokens */
    --md-sys-color-primary: #006a6a;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-outline: #6f7979;
    --md-sys-color-surface-container-highest: #dde4e3;

    /* Component tokens */
    --md-switch-handle-shape: 0px;
    --md-switch-track-shape: 0px;
  }
</style>

<Switch></Switch>
<Switch selected></Switch>
```

<!-- auto-generated API docs start -->

## API


### MdSwitch <code>&lt;md-switch&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

Property | Attribute | Type | Default | Description
--- | --- | --- | --- | ---
`disabled` | `disabled` | `boolean` | `false` | Disables the switch and makes it non-interactive.
`selected` | `selected` | `boolean` | `false` | Puts the switch in the selected state and sets the form submission value to the `value` property.
`icons` | `icons` | `boolean` | `false` | Shows both the selected and deselected icons.
`showOnlySelectedIcon` | `show-only-selected-icon` | `boolean` | `false` | Shows only the selected icon, and not the deselected icon. If `true`, overrides the behavior of the `icons` property.
`required` | `required` | `boolean` | `false` | When true, require the switch to be selected when participating in form submission.<br>https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
`value` | `value` | `string` | `'on'` | The value associated with this switch on form submission. `null` is submitted when `selected` is `false`.
`name` |  | `string` | `undefined` | 
`form` |  | `HTMLFormElement` | `undefined` | 
`labels` |  | `NodeList` | `undefined` | 
`validity` |  | `ValidityState` | `undefined` | 
`validationMessage` |  | `string` | `undefined` | 
`willValidate` |  | `boolean` | `undefined` | 

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

Method | Parameters | Returns | Description
--- | --- | --- | ---
`checkValidity` | _None_ | `boolean` | Checks the switch's native validation and returns whether or not the element is valid.<br>If invalid, this method will dispatch the `invalid` event.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
`reportValidity` | _None_ | `boolean` | Checks the switch's native validation and returns whether or not the element is valid.<br>If invalid, this method will dispatch the `invalid` event.<br>The `validationMessage` is reported to the user by the browser. Use `setCustomValidity()` to customize the `validationMessage`.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
`setCustomValidity` | `error` | `void` | Sets the switch's native validation error message. This is used to customize `validationMessage`.<br>When the error is not an empty string, the switch is considered invalid and `validity.customError` will be true.<br>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Events

<!-- mdformat off(autogenerated might break rendering in catalog) -->

Event | Description
--- | ---
`input` | Fired whenever `selected` changes due to user interaction (bubbles and composed).
`change` | Fired whenever `selected` changes due to user interaction (bubbles).

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->
