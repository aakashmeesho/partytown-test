import {
  SEO_FOOTER_ERROR,
  SEO_FOOTER_REQUEST,
  SEO_FOOTER_SUCCESS,
} from './constants';

const initialState = {
  loading: false,
  footerLinks: {},
  error: null,
};

export const SEOReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case SEO_FOOTER_REQUEST:
      return { ...state, loading: true, error: null };

    case SEO_FOOTER_SUCCESS:
      console.log('FOOTER SUCCESS', action.payload);

      return { ...state, loading: false, footerLinks: action.payload };

    case SEO_FOOTER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
