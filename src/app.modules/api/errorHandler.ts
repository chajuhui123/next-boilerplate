export const errorHandler = (error) => {
  const _message = {
    /* BadRequest */
    400: '잘못된 요청입니다.',

    /* Unauthorized */
    401: '로그인 세션이 만료되었습니다.',

    /* Forbidden */
    403: '접근 권한이 없습니다.',

    /* Not Found */
    404: '페이지를 찾을 수 없습니다.',
  };

  try {
    if (!error) throw 'no error params';

    let errorMessage = error.data.error ?? _message[error.status];
    let errorCode = error.status;

    // notification.error({
    //   message: `Error ${errorCode}`,
    //   description: errorMessage,
    // });
  } catch (e) {
    // notification.error({
    //   message: 'Error',
    //   description: '예기치 못한 오류가 발생했습니다.',
    // });
  }
};
