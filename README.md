# AWS Cognito protects Amazon API Gateway APIs - OAuth2.0 Authentication

## Introduction
Now a days, it's important to build security mechanism to protect internet-facing APIs. OAuth 2.0 authorization framework is a popular framework for API authorization and authentication, but it's complex to implement by developers.

The solution leverages Amazon Cognito User Pools and its OAuth2.0 framework support to help developers implement OAuth2.0 for API protection. Cognito can be integrated with Amazon API Gateway with API Gateway Cognito Authorizor. 

## AWS Services
### AWS Cognito
[Amazon Cognito](https://aws.amazon.com/cognito/details/) is a developer-centric and cost-effective customer identity and access management (CIAM) service. It provides a secure identity store and federation options that can scale to millions of users. Amazon Cognito supports login with social identity providers and SAML or OIDC-based identity providers for delightful customer experiences, and offers advanced security features to protect your customers and business. It supports various compliance standards, operates on open identity standards (OAuth2.0, SAML 2.0 and OpenID Connect) and integrates with an extended ecosystem of front-end and back-end development resources and SDK libraries.

### Amazon API Gateway
[Amazon API Gateway](https://aws.amazon.com/api-gateway/) is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.

API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, CORS support, authorization and access control, throttling, monitoring, and API version management. API Gateway has no minimum fees or startup costs. You pay for the API calls you receive and the amount of data transferred out and, with the API Gateway tiered pricing model, you can reduce your cost as your API usage scales.

### Amazon CloudFormation
[AWS CloudFormation](https://aws.amazon.com/cloudformation/) gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code. A CloudFormation template describes your desired resources and their dependencies so you can launch and configure them together as a stack. You can use a template to create, update, and delete an entire stack as a single unit, as often as you need to, instead of managing resources individually. You can manage and provision stacks across multiple AWS accounts and AWS Regions.

## File structure
`
-- /
 |
 |-- template.yaml
 |-- src
   |
   |-- callback.js
   |-- oauth_test.js
`
### CloudFormation template
#### template.yaml

The CloudFormation template.yaml creates resources below:
- Amazon Cognito resources
  - Cognito User Pool
  - Cognito User Pool Domain
  - Cognito User Pool default user(s)
  - Cognito ResourceServer
  - Cognito User Pool Clients and OAuth 2.0 configurations
- An AWS API Gateway
  - API Gateway Authorizor
- Dummy AWS Lambda functions for testing

You can modify the template.yaml to use different OAuth 2.0 grant flows such as Authorization code grant or Client credentials grant.

### Lambda functions
#### src/
oauth_test.js
oauth_test_1.js

