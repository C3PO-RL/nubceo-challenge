import {
  GET_BANDS,
  CHANGE_PAGE,
  GET_GENRE,
  GET_ALBUMS,
  SELECTED_BAND,
  SELECTED_BAND_GENRE,
    SELECTED_BAND_MEMBERS,
  CONDITIONAL_RENDERING,
} from '../context/types';

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_BANDS:
      return {
        ...state,
        bands: payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case GET_GENRE:
      return {
        ...state,
        genre: payload,
      };
    case GET_ALBUMS:
      return {
        ...state,
        albums: payload,
      };
    case SELECTED_BAND:
      return {
        ...state,
        selectedBand: payload,
      };
    case SELECTED_BAND_GENRE:
      return {
        ...state,
        selectedBandGenre: payload,
      };
    case SELECTED_BAND_MEMBERS:
      return {
        ...state,
        selectedBandMembers: payload,
      };
      case CONDITIONAL_RENDERING:
      return {
        ...state,
        condRender: payload,
      };
    default:
      return state;
  }
};
export default reducer;
