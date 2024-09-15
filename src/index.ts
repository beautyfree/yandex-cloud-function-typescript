import { Handler } from '@yandex-cloud/function-types'

export const handler: Handler.Http = (event, context) => {
  console.log('Hello world!')

  return {
    statusCode: 200,
    body: JSON.stringify({ event, context }),
  }
}
