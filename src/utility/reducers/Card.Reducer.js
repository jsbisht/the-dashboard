import * as Constant from '../actions/Constant.Type';

export default function cardReducer(state = [], action) {
  switch(action.type) {
    case Constant.CREATE_CARD:
      return [...state,
        Object.assign({}, action.card)
      ];

    default:
      return state;
  }
}
