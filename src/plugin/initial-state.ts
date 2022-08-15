/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} initial state file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModalPluginState } from "./types";

/**
 * Internal {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} slice initial state
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
const modalInitialState: ModalPluginState = {
  isVisible: false,
  type: null,
  context: {},
};

export default modalInitialState;
