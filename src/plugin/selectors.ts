/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} slice selectors
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=selectors
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineGlobalState } from "mobrix-engine-types";

import { createMoBrixEngineSelector } from "mobrix-engine-tools";

import { ModalPluginState } from "./types";

import modalInitialState from "./initial-state";

/**
 *
 * Returns {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} slice, or the default state if the plugin is not enabled
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=selectors
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getModalView = (
  state: MoBrixEngineGlobalState<{ modal?: ModalPluginState }>
): ModalPluginState => state.modal || modalInitialState;

/**
 * Returns the app modal visibility
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=selectors
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isModalVisible = createMoBrixEngineSelector(
  getModalView,
  ({ isVisible }) => isVisible
);

/**
 * Returns actually opened modal type, null if no modal is opened
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=selectors
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getModalType = createMoBrixEngineSelector(
  getModalView,
  ({ type }) => type
);

/**
 * Returns actual modal context
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=selectors
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getModalContext = createMoBrixEngineSelector(
  getModalView,
  ({ context }) => context
);
