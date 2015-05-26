---
title: "Component: Buttons"
template: no-menu.mustache
---

# Buttons

## Basic button use

Buttons can be one of two fundamental elements: `<a>` and `<button>`. Link buttons **should** be used for navigational buttons or controls, i.e. any button that maps to taking the user to a new UI state that can or should be reflected in the URL (be it via page load or the HTML History API). Regular buttons, also called action buttons, **should** be used for all other controls, e.g. actions that do not reflect a change to the URL.

All buttons **must** either contain a `.button__label` element inside it, _or_ contain only the text string _and_ have no icons _and_ have no reduced Responsive state for smaller screens.

```html
<!-- Link button -->
<a href="/dossiers/:id/contents/" class="button">
  <i class="button__icon icon icon-dossier-files"></i>
  <span class="button__label" data-text="dossiers__dossier-contents">Dossier Contents</span>
</a>

<!-- Action button -->
<button class="button">
  <i class="button__icon icon icon-forward"></i>
  <span class="button__label" data-text="dossiers__forward-dossier">Forward dossier</span>
</button>
```

## Button states and Accessibility

Button controls **should** have declared and identifiable `:focus` and `:hover` states. The two states ***must*** be different from the default state, and they _may_ be differently styled from one another. Keyboard navigation benefits from a more distinctive `:focus` state to help the user track focus, whereas `:hover` is distinctly a mouse-based interaction (even if sometimes simulated by touch devices in lieu of touch-specific handling). 

The `:active` state is useful for both link and action buttons, but depending on implementation and use case, _may not_ need to be very distinctive.



```html
<button class="button button--clear button--icon-only button--label-on-hover button--label-on-right">
    <i class="icon icon-add-comment"></i>
    <span class="button__label">Add comment</span>
</button>
```

# Button Class, Elements and Modifiers:

* button
  * button__icon 
  * button__label
* button--clear
* button--icon-only
* button--label-on-hover
* button--label-right | left | above | below
