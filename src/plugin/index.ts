/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineDispatch } from "mobrix-engine-types";
import { ModalPlugin } from "./types";
import initialState from "./initial-state";
import * as actions from "./actions";
import modalReducer from "./reducer";
import { getModalType, isModalVisible } from "./selectors";
import { createMoBrixEnginePlugin } from "mobrix-engine-tools";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} plugin. Extends {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine}
 * system with a modal manager, to drive the web app modal with global actions and centralized values for visibility and, optionally, additional data associated with every modal.
 * To use it, add it to `plugins` array inside MoBrix-engine config
 *
 * @example <caption> Use modal plugin with MoBrix-engine </caption>
 *
 * //Inside your MoBrix-engine config
 *
 * const modalPlugin = require("mobrix-engine-plugin-modal");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [modalPlugin],
 *   modal: {
 *     onModalClose: [() => alert("modal closed")],
 *     onModalOpen: [() => alert("modal opened")],
 *   },
 * };
 *
 * module.exports = { config };
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const modalPlugin: ModalPlugin = createMoBrixEnginePlugin(
  "mobrix-engine-modal",
  () => ({
    field: (config) => {
      const modalConfig = config.modal || {};

      return {
        name: "modal",
        content: {
          onModalClose: modalConfig.onModalClose || [],
          onModalOpen: modalConfig.onModalOpen || [],
        },
      };
    },
    reducer: (config) => ({
      slice: "modal",
      effects: modalReducer,
      initialState,
    }),
    interactions: [
      {
        plugin: "mobrix-engine-url-checker",
        effect: (urlCheckerConfig) => {
          urlCheckerConfig.queryParameters["modal"] = ({
            urlParam,
            config: inputConfig,
            store,
          }) => {
            urlParam && store.dispatch(actions.openModal(urlParam));

            return inputConfig;
          };

          urlCheckerConfig.after.push("modal");

          return urlCheckerConfig;
        },
      },
    ],
    designerInteractions: [
      {
        plugin: "mobrix-designer-forms",
        effect: (field, config) => {
          field.getFormType = field.getFormType || getModalType;
          field.getModalVisibility = field.getModalVisibility || isModalVisible;
          field.onClose =
            field.onClose ||
            ((dispatch: MoBrixEngineDispatch) => {
              dispatch(actions.closeModal());
            });
          return field;
        },
      },
    ],
    middlewares: (config) => {
      const callBacks = {
        onModalClose: (context) => {
          config.modal?.onModalClose?.forEach((callback) => {
            callback(context);
          });
        },
        onModalOpen: (context) => {
          config.modal?.onModalOpen?.forEach((callback) => {
            callback(context);
          });
        },
      };

      return {
        middlewares: [
          (action, store) => {
            const state = store.getState();

            switch (action.type) {
              case actions.openModal.type: {
                callBacks.onModalOpen(state.modal.context);
                break;
              }

              case actions.closeModal.type: {
                callBacks.onModalClose(state.modal.context);
                break;
              }
            }
          },
        ],
      };
    },
  })
);

export default modalPlugin;
