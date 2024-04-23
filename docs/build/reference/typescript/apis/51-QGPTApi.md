---
title: QGPT API | TypeScript SDK
---

# QGPT API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**hints**](QGPTApi#hints) | **POST** /qgpt/hints | /qgpt/hints [POST]
[**personsRelated**](QGPTApi#personsrelated) | **POST** /qgpt/persons/related | /qgpt/persons/related [POST]
[**qgptStream**](QGPTApi#qgptstream) | **GET** /qgpt/stream | /qgpt/stream [WS]
[**question**](QGPTApi#question) | **POST** /qgpt/question | /qgpt/question [POST]
[**relevance**](QGPTApi#relevance) | **POST** /qgpt/relevance | /qgpt/relevance [POST]
[**reprompt**](QGPTApi#reprompt) | **POST** /qgpt/reprompt | /qgpt/reprompt [POST]


## **hints** {#hints}
> QGPTQuestionOutput hints()

Generates suggested questions that users can ask. It accepts the answer displayed to the user, relevant code snippets used for the answer, and the previous query as inputs. In return, it provides a list of questions that can be presented to the user.

### Example {#hints-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.QGPTApi(configuration)

const body: Pieces.HintsRequest = {
// QGPTHintsInput (optional)
qGPTHintsInput: ,
};

apiInstance.hints(body).then((data: QGPTQuestionOutput) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#hints-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qGPTHintsInput** | **QGPTHintsInput**|  |


### Return type {#hints-return-type}

[**QGPTQuestionOutput**](../models/QGPTQuestionOutput)

### HTTP request headers {#hints-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#hints-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **personsRelated** {#personsrelated}
> QGPTPersonsRelatedOutput personsRelated()

Utilize this endpoint for Who Support, identifying individuals who can provide assistance when given context such as a Seed or a QGPT Conversation, for example.  Input:   - (optional) seed: Seed - Only supports fragments for now.   - (optional) conversation: QGPTConversation.  Output:   - persons: Persons

### Example {#personsrelated-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.QGPTApi(configuration)

const body: Pieces.PersonsRelatedRequest = {
// boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
transferables: true,
// QGPTPersonsRelatedInput (optional)
qGPTPersonsRelatedInput: ,
};

apiInstance.personsRelated(body).then((data: QGPTPersonsRelatedOutput) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#personsrelated-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qGPTPersonsRelatedInput** | **QGPTPersonsRelatedInput**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type {#personsrelated-return-type}

[**QGPTPersonsRelatedOutput**](../models/QGPTPersonsRelatedOutput)

### HTTP request headers {#personsrelated-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#personsrelated-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **qgptStream** {#qgptstream}
> QGPTStreamOutput qgptStream()

Provides a WebSocket connection that streams inputs to the qGPT model. It handles relevance and questions, but will throw an error if both are passed in simultaneously. However, if you wish to utilize both question and relevance, you can obtain stream results by passing relevance with the option \'question:true\'. It is designed to manage multiple conversations.

### Example {#qgptstream-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.QGPTApi(configuration)

const body: Pieces.QgptStreamRequest = {
// QGPTStreamInput (optional)
qGPTStreamInput: ,
};

apiInstance.qgptStream(body).then((data: QGPTStreamOutput) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#qgptstream-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qGPTStreamInput** | **QGPTStreamInput**|  |


### Return type {#qgptstream-return-type}

[**QGPTStreamOutput**](../models/QGPTStreamOutput)

### HTTP request headers {#qgptstream-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#qgptstream-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**429** | Rate limit/Quota exceeded |  -  |
**500** | Internal Server Error |  -  |
**503** | The engine is currently overloaded |  -  |

## **question** {#question}
> QGPTQuestionOutput question()

Processes relevant code snippets or UUIDs returned from the /qgpt/relevance endpoint, along with a question query, to provide possible answers.  Note:   - Relevant seeds must either include an ID used within the /qgpt/relevance endpoint or a seed with a fragment/string; otherwise, an error will be thrown.   - This endpoint utilizes your query and relevant snippets to generate multiple answers, each accompanied by a score.

### Example {#question-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.QGPTApi(configuration)

const body: Pieces.QuestionRequest = {
// QGPTQuestionInput (optional)
qGPTQuestionInput: ,
};

apiInstance.question(body).then((data: QGPTQuestionOutput) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#question-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qGPTQuestionInput** | **QGPTQuestionInput**|  |


### Return type {#question-return-type}

[**QGPTQuestionOutput**](../models/QGPTQuestionOutput)

### HTTP request headers {#question-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#question-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**429** | Too Many Requests (Rate limit or quota exceeded) |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable, (engine is currently overloaded) |  -  |

## **relevance** {#relevance}
> QGPTRelevanceOutput relevance()

This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)

### Example {#relevance-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.QGPTApi(configuration)

const body: Pieces.RelevanceRequest = {
// QGPTRelevanceInput (optional)
qGPTRelevanceInput: ,
};

apiInstance.relevance(body).then((data: QGPTRelevanceOutput) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#relevance-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qGPTRelevanceInput** | **QGPTRelevanceInput**|  |


### Return type {#relevance-return-type}

[**QGPTRelevanceOutput**](../models/QGPTRelevanceOutput)

### HTTP request headers {#relevance-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#relevance-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**429** | Too Many Requests (Rate limit or quota exceeded) |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable, (engine is currently overloaded) |  -  |

## **reprompt** {#reprompt}
> QGPTRepromptOutput reprompt()

This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.

### Example {#reprompt-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.QGPTApi(configuration)

const body: Pieces.RepromptRequest = {
// QGPTRepromptInput (optional)
qGPTRepromptInput: ,
};

apiInstance.reprompt(body).then((data: QGPTRepromptOutput) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#reprompt-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qGPTRepromptInput** | **QGPTRepromptInput**|  |


### Return type {#reprompt-return-type}

[**QGPTRepromptOutput**](../models/QGPTRepromptOutput)

### HTTP request headers {#reprompt-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details {#reprompt-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


