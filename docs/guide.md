# MoBrix-engine-plugin-modal

<br>

Manage your web app modal with [mobrix-engine system](https://github.com/CianciarusoCataldo/mobrix-engine)

<br>

---

## Getting started

<br>

### Installation

If you want to use this plugin with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine), install it:

```sh
npm i mobrix-engine-plugin-modal
```

<br>

### Usage

Check [mobrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) guide to init the system

Include this plugin inside your mobrix-engine config, optionally with `modal` field set, to customize onModalOpen and onModalClose callbacks:

```tsx
const { modalPlugin } = require("mobrix-engine-plugin-modal");

const config = {
  appName: "custom-app",
  plugins: [modalPlugin],
  modal: {
    onModalClose: [() => alert("modal closed")],
    onModalOpen: [() => alert("modal opened")],
  },
};

module.exports = { config };
```

<br>

Then you can drive your modal component (in this example it is used [MoBrix-ui](https://github.com/CianciarusoCataldo/mobrix-ui) modal), with selectors:

```tsx
import { isModalVisible, getModalType } from "mobrix-engine-plugin-modal";
import { Modal } from "mobrix-ui";

const forms = {
  formOne: () => <div>Form one</div>,
  formTwo: () => <div>Form two</div>,
};

export const CustomComponent = () => {
  const isVisible = useSelectors(isModalVisible);
  const type = useSelectors(getModalType);
  const Content = forms[type] || () => <div/>;

  return (
    <Modal hide={!isVisible}>
      <Content />
    </Modal>
  );
};
```

<br>

---

## API

<br>

### Config

This plugin adds adds a custom field inside mobrix-engine config, `modal`. Inside this field, there are the plugin settings:

| Setting        | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `onModalClose` | array of functions, that are called everytime the modal is closed |
| `onModalOpen`  | array of functions, that are called everytime the modal is opened |

<br>

### Actions

| Action creator      | Arguments                                                                                                       | Effect                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `openModal`         | - `type`: modal form type to open <br>- `context` : (optional) custom data associated with the given modal form | Open the modal, and optionally set the actual context                                                      |
| `closeModal`        | /                                                                                                               | Close the modal, and reset the context                                                                     |
| `setModalContext`   | - `context` : custom modal context to set                                                                       | (similar to openModa and closeModal, but doesn't affect the visibility or the form type)                   |
| `setModalForm`      | - `type` : modal form type to set                                                                               | Set modal form type (similar to openModa and closeModal, but doesn't affect the context or the visibiity)  |
| `setModalVisiblity` | - `visibility` : modal visibility to set                                                                        | Set modal visibility (similar to openModa and closeModal, but doesn't affect the context or the form type) |

<br>

Import them from this lib:

```tsx
import {
  closeModal,
  openModal,
  setModalContext,
  setModalForm,
  setModalVisiblity,
} from "mobrix-engine-plugin-modal";
```

Then dispatch them from any part of your app:

```tsx
import { isModalVisible, getModalType } from "mobrix-engine-plugin-modal";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "mobrix-ui";

export const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(openModal("formOne"));
      }}
    >
      Open form one
    </Button>
  );
};
```

<br>

### Selectors

| Selectors         | Returns                                                                          |
| ----------------- | -------------------------------------------------------------------------------- |
| `getModalView`    | Modal state, or default state if not enabled                                     |
| `getModalType`    | Modal type, that can be used as a key to find the right component to show        |
| `getModalContext` | Modal context, a custom object associated to the actual modal type (can be null) |
| `isModalVisible`  | Modal visibility, to determine when show or hide the Modal component             |

<br>

Import them from this lib:

```tsx
import {
  getModalContext,
  getModalType,
  getModalView,
  isModalVisible,
} from "mobrix-engine-plugin-modal";
```

Then use them from any part of your app:

```tsx
import { isModalVisible, getModalType } from "mobrix-engine-plugin-modal";
import { useSelector } from "react-redux";

import { Button } from "mobrix-ui";

export const ModalDebugComponent = () => {
  const type = useSelector(getModalType);
  const isVisible = useSelector(isModalVisible);

  return (
    <div>
      <p>{`Actual form type is set to ${type}`}</p>
      <p>{{`Modal is ${isVisible?"opened":"closed"}`}}</p>
  </div>
  );
};
```

<br>

---

## Integration with other plugins

- This plugin expose some fields to work with any other plugin. If you want to interact with it, using your custom plugin, add an `interaction` with `mobrix-engine-modal` plugin into you custom plugin. There you can add your callbacks to `modal` fields (check [config section](#config) for details). For example, to add a custom function to be called when modal is opened, inside the `format` function of your custom plugin:

```tsx
//Just a skeleton of a custom plugin that interacts with modal plugin
const customPlugin = () => ({
  // Custom plugin stuffs

  interactions: [
    {
      plugin: "mobrix-engine-modal",
      effect: (modalConfig) => {
        //Add the custom callback
        modalConfig.onModalOpened.push(() => {
          alert("Modal opened");
        });
      },
    },
  ],
});
```

  <br>

- Additionally, if you use [mobrix-engine-plugin-url-checker](https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker) too, you can open the modal directly from URL, with query parameters, by passing the `modal` parameter with the form type you want to open. Try it with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) playground (look the query parameters) - https://cianciarusocataldo.github.io/mobrix-engine?modal=TestModal

  <br>

---

## Included libraries

- [MoBrix-engine-types](https://github.com/CianciarusoCataldo/mobrix-engine-types) - to work easier with mobrix-engine system
- [MoBrix-engine-tools](https://github.com/CianciarusoCataldo/mobrix-engine-tools) - to use mobrix-engine utils functions, to easily work with it
- This library is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
