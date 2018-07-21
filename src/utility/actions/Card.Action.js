import * as Constant from './Constant.Type';

export function createCard(card) {
  return { type: Constant.CREATE_CARD, card };
}
