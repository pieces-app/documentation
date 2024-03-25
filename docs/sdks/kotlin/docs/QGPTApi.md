# QGPT API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hints**](QGPTApi.md#hints) | **POST** /qgpt/hints | /qgpt/hints [POST]
[**personsRelated**](QGPTApi.md#personsRelated) | **POST** /qgpt/persons/related | /qgpt/persons/related [POST]
[**qgptStream**](QGPTApi.md#qgptStream) | **GET** /qgpt/stream | /qgpt/stream [GET]
[**question**](QGPTApi.md#question) | **POST** /qgpt/question | /qgpt/question [POST]
[**relevance**](QGPTApi.md#relevance) | **POST** /qgpt/relevance | /qgpt/relevance [POST]
[**reprompt**](QGPTApi.md#reprompt) | **POST** /qgpt/reprompt | /qgpt/reprompt [POST]


<a id="hints"></a>
## **hints**
> QGPTQuestionOutput hints(qgPTHintsInput)

/qgpt/hints [POST]

This is only to generate suggested questions that the user can ask. ( we will provide the answer we displayed to the user, the relevant snippets used for the answer, and the previous query.  We will return a list of questions that can be displayed to the user.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QGPTApi()
val qgPTHintsInput : QGPTHintsInput =  // QGPTHintsInput | 
try {
    val result : QGPTQuestionOutput = apiInstance.hints(qgPTHintsInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPTApi#hints")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPTApi#hints")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTHintsInput** | [**QGPTHintsInput**](QGPTHintsInput.md)|  | [optional]

### Return type

[**QGPTQuestionOutput**](QGPTQuestionOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="personsRelated"></a>
## **personsRelated**
> QGPTPersonsRelatedOutput personsRelated(transferables, qgPTPersonsRelatedInput)

/qgpt/persons/related [POST]

This Endpoint is used for Who Support.  IE given context like a Seed, or a qgptConversation, who will be able to help out.   Input: - (optional) seed: Seed - ONLY GOING TO SUPPORT fragments.for now. - (optional) conversation: QGPTConversation.  Output: - persons: Persons

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QGPTApi()
val transferables : kotlin.Boolean = true // kotlin.Boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
val qgPTPersonsRelatedInput : QGPTPersonsRelatedInput =  // QGPTPersonsRelatedInput | 
try {
    val result : QGPTPersonsRelatedOutput = apiInstance.personsRelated(transferables, qgPTPersonsRelatedInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPTApi#personsRelated")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPTApi#personsRelated")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **kotlin.Boolean**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional]
 **qgPTPersonsRelatedInput** | [**QGPTPersonsRelatedInput**](QGPTPersonsRelatedInput.md)|  | [optional]

### Return type

[**QGPTPersonsRelatedOutput**](QGPTPersonsRelatedOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="qgptStream"></a>
## **qgptStream**
> QGPTStreamOutput qgptStream(qgPTStreamInput)

/qgpt/stream [GET]

This is a version of qGPT stream that will stream the inputs.  This will handle relevance.  This will handle question.  This will throw an error if both are passed in. That being said if you want to utalize question &amp;&amp; relevant, you can get stream results by passing in relevance with options.question:true.  This will handle multiple conversations.  This is a Websocket.  StatusCodes of the output of this will be on the output of the websocket: 200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QGPTApi()
val qgPTStreamInput : QGPTStreamInput =  // QGPTStreamInput | 
try {
    val result : QGPTStreamOutput = apiInstance.qgptStream(qgPTStreamInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPTApi#qgptStream")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPTApi#qgptStream")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTStreamInput** | [**QGPTStreamInput**](QGPTStreamInput.md)|  | [optional]

### Return type

[**QGPTStreamOutput**](QGPTStreamOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="question"></a>
## **question**
> QGPTQuestionOutput question(qgPTQuestionInput)

/qgpt/question [POST]

This is going to accept, relevant code snippets or uuids returned from the /qgpt/relevance endpoint, as well as a question query and we will return possible results to answer your question.  NOTE: - The relevant seeds, must require either an id, that was used within the /qgpt/relevance endpoint or a seed with afragment/string. or else we will throw and error.  This endpoint will take your query and your relevant snippets and use them to answer your question, returning multiple answers to your question all of which with scores.  200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QGPTApi()
val qgPTQuestionInput : QGPTQuestionInput =  // QGPTQuestionInput | 
try {
    val result : QGPTQuestionOutput = apiInstance.question(qgPTQuestionInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPTApi#question")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPTApi#question")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTQuestionInput** | [**QGPTQuestionInput**](QGPTQuestionInput.md)|  | [optional]

### Return type

[**QGPTQuestionOutput**](QGPTQuestionOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="relevance"></a>
## **relevance**
> QGPTRelevanceOutput relevance(qgPTRelevanceInput)

/qgpt/relevance [POST]

This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QGPTApi()
val qgPTRelevanceInput : QGPTRelevanceInput =  // QGPTRelevanceInput | 
try {
    val result : QGPTRelevanceOutput = apiInstance.relevance(qgPTRelevanceInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPTApi#relevance")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPTApi#relevance")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTRelevanceInput** | [**QGPTRelevanceInput**](QGPTRelevanceInput.md)|  | [optional]

### Return type

[**QGPTRelevanceOutput**](QGPTRelevanceOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="reprompt"></a>
## **reprompt**
> QGPTRepromptOutput reprompt(qgPTRepromptInput)

/qgpt/reprompt [POST]

This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QGPTApi()
val qgPTRepromptInput : QGPTRepromptInput =  // QGPTRepromptInput | 
try {
    val result : QGPTRepromptOutput = apiInstance.reprompt(qgPTRepromptInput)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QGPTApi#reprompt")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QGPTApi#reprompt")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgPTRepromptInput** | [**QGPTRepromptInput**](QGPTRepromptInput.md)|  | [optional]

### Return type

[**QGPTRepromptOutput**](QGPTRepromptOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

