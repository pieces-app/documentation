---
title: QGPT API | Kotlin SDK
---

# QGPT API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**hints**](#hints) | **POST** /qgpt/hints | /qgpt/hints [POST]
[**personsRelated**](#personsrelated) | **POST** /qgpt/persons/related | /qgpt/persons/related [POST]
[**qgptStream**](#qgptstream) | **GET** /qgpt/stream | /qgpt/stream [WS]
[**question**](#question) | **POST** /qgpt/question | /qgpt/question [POST]
[**relevance**](#relevance) | **POST** /qgpt/relevance | /qgpt/relevance [POST]
[**reprompt**](#reprompt) | **POST** /qgpt/reprompt | /qgpt/reprompt [POST]


## **hints** {#hints}
> QGPTQuestionOutput hints(qgPTHintsInput)

/qgpt/hints [POST]

Generates suggested questions that users can ask. It accepts the answer displayed to the user, relevant code snippets used for the answer, and the previous query as inputs. In return, it provides a list of questions that can be presented to the user.

### Example {#hints-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = QGPT API()
val qgPTHintsInput : QGPTHintsInput =  // QGPTHintsInput | 
try {
    val result : QGPTQuestionOutput = apiInstance.hints(qgPTHintsInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPT API#hints")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPT API#hints")
    e.printStackTrace()
}
```

### Parameters {#hints-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTHintsInput** | [**QGPTHintsInput**](../models/QGPTHintsInput)|  | [optional]

### Return type {#hints-return-type}

[**QGPTQuestionOutput**](../models/QGPTQuestionOutput)

### Authorization {#hints-authorization}

No authorization required

### HTTP request headers {#hints-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **personsRelated** {#personsrelated}
> QGPTPersonsRelatedOutput personsRelated(transferables, qgPTPersonsRelatedInput)

/qgpt/persons/related [POST]

Utilize this endpoint for Who Support, identifying individuals who can provide assistance when given context such as a Seed or a QGPT Conversation, for example.  Input:   - (optional) seed: Seed - Only supports fragments for now.   - (optional) conversation: QGPTConversation.  Output:   - persons: Persons

### Example {#personsrelated-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = QGPT API()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val qgPTPersonsRelatedInput : QGPTPersonsRelatedInput =  // QGPTPersonsRelatedInput | 
try {
    val result : QGPTPersonsRelatedOutput = apiInstance.personsRelated(transferables, qgPTPersonsRelatedInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPT API#personsRelated")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPT API#personsRelated")
    e.printStackTrace()
}
```

### Parameters {#personsrelated-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **qgPTPersonsRelatedInput** | [**QGPTPersonsRelatedInput**](../models/QGPTPersonsRelatedInput)|  | [optional]

### Return type {#personsrelated-return-type}

[**QGPTPersonsRelatedOutput**](../models/QGPTPersonsRelatedOutput)

### Authorization {#personsrelated-authorization}

No authorization required

### HTTP request headers {#personsrelated-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **qgptStream** {#qgptstream}
> QGPTStreamOutput qgptStream(qgPTStreamInput)

/qgpt/stream [WS]

Provides a WebSocket connection that streams inputs to the qGPT model. It handles relevance and questions, but will throw an error if both are passed in simultaneously. However, if you wish to utilize both question and relevance, you can obtain stream results by passing relevance with the option &#39;question:true&#39;. It is designed to manage multiple conversations.

### Example {#qgptstream-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = QGPT API()
val qgPTStreamInput : QGPTStreamInput =  // QGPTStreamInput | 
try {
    val result : QGPTStreamOutput = apiInstance.qgptStream(qgPTStreamInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPT API#qgptStream")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPT API#qgptStream")
    e.printStackTrace()
}
```

### Parameters {#qgptstream-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTStreamInput** | [**QGPTStreamInput**](../models/QGPTStreamInput)|  | [optional]

### Return type {#qgptstream-return-type}

[**QGPTStreamOutput**](../models/QGPTStreamOutput)

### Authorization {#qgptstream-authorization}

No authorization required

### HTTP request headers {#qgptstream-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **question** {#question}
> QGPTQuestionOutput question(qgPTQuestionInput)

/qgpt/question [POST]

Processes relevant code snippets or UUIDs returned from the /qgpt/relevance endpoint, along with a question query, to provide possible answers.  Note:   - Relevant seeds must either include an ID used within the /qgpt/relevance endpoint or a seed with a fragment/string; otherwise, an error will be thrown.   - This endpoint utilizes your query and relevant snippets to generate multiple answers, each accompanied by a score.

### Example {#question-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = QGPT API()
val qgPTQuestionInput : QGPTQuestionInput =  // QGPTQuestionInput | 
try {
    val result : QGPTQuestionOutput = apiInstance.question(qgPTQuestionInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPT API#question")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPT API#question")
    e.printStackTrace()
}
```

### Parameters {#question-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTQuestionInput** | [**QGPTQuestionInput**](../models/QGPTQuestionInput)|  | [optional]

### Return type {#question-return-type}

[**QGPTQuestionOutput**](../models/QGPTQuestionOutput)

### Authorization {#question-authorization}

No authorization required

### HTTP request headers {#question-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **relevance** {#relevance}
> QGPTRelevanceOutput relevance(qgPTRelevanceInput)

/qgpt/relevance [POST]

This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)

### Example {#relevance-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = QGPT API()
val qgPTRelevanceInput : QGPTRelevanceInput =  // QGPTRelevanceInput | 
try {
    val result : QGPTRelevanceOutput = apiInstance.relevance(qgPTRelevanceInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPT API#relevance")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPT API#relevance")
    e.printStackTrace()
}
```

### Parameters {#relevance-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTRelevanceInput** | [**QGPTRelevanceInput**](../models/QGPTRelevanceInput)|  | [optional]

### Return type {#relevance-return-type}

[**QGPTRelevanceOutput**](../models/QGPTRelevanceOutput)

### Authorization {#relevance-authorization}

No authorization required

### HTTP request headers {#relevance-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

## **reprompt** {#reprompt}
> QGPTRepromptOutput reprompt(qgPTRepromptInput)

/qgpt/reprompt [POST]

This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.

### Example {#reprompt-example}
```kotlin
// Import classes:
//import app.pieces.pieces-os-client.infrastructure.*
//import app.pieces.pieces-os-client.models.*

val apiInstance = QGPT API()
val qgPTRepromptInput : QGPTRepromptInput =  // QGPTRepromptInput | 
try {
    val result : QGPTRepromptOutput = apiInstance.reprompt(qgPTRepromptInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPT API#reprompt")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPT API#reprompt")
    e.printStackTrace()
}
```

### Parameters {#reprompt-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTRepromptInput** | [**QGPTRepromptInput**](../models/QGPTRepromptInput)|  | [optional]

### Return type {#reprompt-return-type}

[**QGPTRepromptOutput**](../models/QGPTRepromptOutput)

### Authorization {#reprompt-authorization}

No authorization required

### HTTP request headers {#reprompt-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json

