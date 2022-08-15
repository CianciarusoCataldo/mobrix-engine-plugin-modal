/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} actions, used to interact with app modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createMoBrixEngineAction } from "mobrix-engine-tools";

/**
 * Open the modal, with given context (default to empty object), only if given form type is defined
 *
 * @param {string} type modal form to open
 * @param {Record<string,any>} context (optional) custom data associated with given modal form type
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const openModal = createMoBrixEngineAction<{
  type: string;
  context?: Record<string, any>;
}>("@@modal/OPEN_MODAL", (type: string, context?: Record<string, any>) => ({
  type,
  context,
}));

/**
 * Close the modal, and reset the context
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const closeModal = createMoBrixEngineAction("@@modal/CLOSE_MODAL");

/**
 * Set modal context
 *
 * @param {Record<string,any>} context custom modal context to set
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setModalContext = createMoBrixEngineAction(
  "@@modal/SET_CONTEXT",
  (context: Record<string, any>) => ({ context: context })
);

/**
 * Set modal visibility
 *
 * @param {boolean} visibility new modal visibility
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setModalVisiblity = createMoBrixEngineAction(
  "@@modal/SET_VISIBILITY",
  (visibility: boolean) => ({ visibility })
);

/**
 * Set modal form type
 *
 * @param {string} type modal form type to set
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal/#/?id=actions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setModalForm = createMoBrixEngineAction(
  "@@modal/SET_FORM_TYPE",
  (type: string) => ({
    payload: { type },
  })
);
