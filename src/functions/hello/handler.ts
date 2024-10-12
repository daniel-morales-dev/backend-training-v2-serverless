import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World V3 hello D MORALES PRUEBA",
      event,
    }),
  };
};

export const main = handler;
