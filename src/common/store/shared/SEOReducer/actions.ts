import axios from 'axios';
import { SEOFooterUrl } from 'common/client.config';
import { checkResponse } from 'common/utils/helpers';

import {
  SEO_FOOTER_ERROR,
  SEO_FOOTER_REQUEST,
  SEO_FOOTER_SUCCESS,
} from './constants';

export const getSEOFooterData = () => async (dispatch: any) => {
  try {
    dispatch({
      type: SEO_FOOTER_REQUEST,
    });

    const options = {
      method: 'GET',
      url: SEOFooterUrl,
    };

    const response = await axios(options as any);

    if (checkResponse(response)) {
      console.log(response.data);

      dispatch({
        type: SEO_FOOTER_SUCCESS,
        payload: response?.data,
      });
    } else {
      throw new Error('SEO call error');
    }
  } catch (error) {
    dispatch({
      type: SEO_FOOTER_ERROR,
      payload: error,
    });
  }
};
