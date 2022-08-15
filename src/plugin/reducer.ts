/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} reducer file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-modal
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineReducerEffects } from "mobrix-engine-types";

import { ModalPluginState } from "./types";

import {
  closeModal,
  openModal,
  setModalContext,
  setModalForm,
  setModalVisiblity,
} from "./actions";

/**
 * Internal {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-modal MoBrix-engine-plugin-modal} reducer
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
const modalReducer: MoBrixEngineReducerEffects<ModalPluginState> = {
  [openModal.type]: (state, action) => ({
    ...state,
    isVisible: action.payload.type !== null,
    type: action.payload.type,
    context: action.payload.context || state.context,
  }),
  [closeModal.type]: (state) => ({
    ...state,
    isVisible: false,
    type: null,
    context: {},
  }),
  [setModalContext.type]: (state, action) => ({
    ...state,
    context: action.payload.context || state.context,
  }),
  [setModalVisiblity.type]: (state, action) => ({
    ...state,
    isVisible: action.payload.visibility,
  }),
  [setModalForm.type]: (state, action) => ({
    ...state,
    type: action.payload.type || state.type,
  }),
};

export default modalReducer;
