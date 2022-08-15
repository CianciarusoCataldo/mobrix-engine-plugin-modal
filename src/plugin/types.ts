/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} type definitions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  MoBrixEngineCustomState,
  MoBrixEnginePlugin,
} from "mobrix-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} state slice
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
export type ModalPluginState = MoBrixEngineCustomState<{
  /** modal visibility */
  isVisible: boolean;

  /** modal form type */
  type: string | null;

  /** modal context data */
  context: Record<string, any>;
}>;

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} callback
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPluginCallback = (
  context: ModalPluginState["context"] | null
) => any;

/**
 *{@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} config settings
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=config
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPluginSettings = MoBrixEngineCustomState<{
  /** Functions called everytime the modal is closed */
  onModalClose?: ModalPluginCallback[];

  /** Functions called everytime the modal is opened */
  onModalOpen?: ModalPluginCallback[];
}>;

/**
 *{@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} interface
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type ModalPlugin = MoBrixEnginePlugin<{ modal?: ModalPluginSettings }>;
