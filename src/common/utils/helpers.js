export const checkResponse = (response) => {
    if (response.status === 200 && response.data) {
      return true;
    }
    return false;
  };