import {Alert} from 'react-native';

interface SerializedError {
  name?: string;
  message: string;
  code?: string;
  stack?: string;
}

interface UnexpectedError {
  data?: string;
  status: string;
  statusText?: string;
}

function instanceOfSerializedError(error: any): error is SerializedError {
  return error && typeof error === 'object' && 'message' in error;
}

function instanceOfUnexpectedError(error: any): error is UnexpectedError {
  return (
    error &&
    typeof error === 'object' &&
    'status' in error &&
    typeof error.data === 'string'
  );
}

export function handleBaseError(error: any): string {
  let errorMessage = 'Щось пішло не так';

  if (error?.response) {
    console.log(
      '📌 Server Error Response:',
      JSON.stringify(error.response.data, null, 2),
    );

    if (instanceOfUnexpectedError(error.response)) {
      errorMessage = `Серверна помилка ${
        error.response.status
      }: ${JSON.stringify(error.response.data)}`;
    } else if (instanceOfSerializedError(error.response.data)) {
      errorMessage = error.response.data.message;
    } else if (error?.response?.data?.result?.message) {
      errorMessage = error.response.data.result.message;
    }
  } else if (error?.message === 'Network Error') {
    errorMessage =
      "Помилка виконання запиту. Перевірте наявність інтернет-з'єднання.";
  } else {
    errorMessage = error?.message || 'Щось пішло не так';
  }

  Alert.alert('Error', errorMessage, [{text: 'OK', style: 'cancel'}]);

  return errorMessage;
}
