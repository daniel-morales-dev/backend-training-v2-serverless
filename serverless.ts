import type { AWS } from "@serverless/typescript";
import { hello } from "./src/functions";

const serverlessConfiguration: AWS = {
  service: "daniel-morales-pets-training",
  frameworkVersion: "3",
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: false,
      exclude: ["aws-sdk"],
      target: "node20",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
  package: {
    individually: true,
  },
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs20.x",
    region: "us-east-1",
    stage: "${opt:stage, 'test'}",
    httpApi: {
      id: {
        "Fn::ImportValue": "dmorales-training-v2-http-api-id-test",
      },
    },
  },
  functions: {
    hello,
  },
};

module.exports = serverlessConfiguration;
