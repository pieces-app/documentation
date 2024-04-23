---
title: QGPT API | Python SDK
---

# QGPT API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**hints**](QGPTApi#hints) | **POST** /qgpt/hints | /qgpt/hints [POST]
[**persons_related**](QGPTApi#persons_related) | **POST** /qgpt/persons/related | /qgpt/persons/related [POST]
[**qgpt_stream**](QGPTApi#qgpt_stream) | **GET** /qgpt/stream | /qgpt/stream [WS]
[**question**](QGPTApi#question) | **POST** /qgpt/question | /qgpt/question [POST]
[**relevance**](QGPTApi#relevance) | **POST** /qgpt/relevance | /qgpt/relevance [POST]
[**reprompt**](QGPTApi#reprompt) | **POST** /qgpt/reprompt | /qgpt/reprompt [POST]


## **hints** {#hints}
> QGPTQuestionOutput hints(qgpt_hints_input=qgpt_hints_input)

/qgpt/hints [POST]

Generates suggested questions that users can ask. It accepts the answer displayed to the user, relevant code snippets used for the answer, and the previous query as inputs. In return, it provides a list of questions that can be presented to the user.

### Example {#hints-example}


```python
import pieces_os_client
from pieces_os_client.models.qgpt_hints_input import QGPTHintsInput
from pieces_os_client.models.qgpt_question_output import QGPTQuestionOutput
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = QGPT API(api_client)
    qgpt_hints_input = pieces_os_client.QGPTHintsInput() # QGPTHintsInput |  (optional)

    try:
        # /qgpt/hints [POST]
        api_response = api_instance.hints(qgpt_hints_input=qgpt_hints_input)
        print("The response of QGPTApi->hints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QGPTApi->hints: %s\n" % e)
```



### Parameters {#hints-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgpt_hints_input** | [**QGPTHintsInput**](../models/QGPTHintsInput)|  | [optional] 

### Return type {#hints-return-type}

[**QGPTQuestionOutput**](../models/QGPTQuestionOutput)

### Authorization {#hints-authorization}

No authorization required

### HTTP request headers {#hints-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#hints-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **persons_related** {#persons_related}
> QGPTPersonsRelatedOutput persons_related(transferables=transferables, qgpt_persons_related_input=qgpt_persons_related_input)

/qgpt/persons/related [POST]

Utilize this endpoint for Who Support, identifying individuals who can provide assistance when given context such as a Seed or a QGPT Conversation, for example.  Input:   - (optional) seed: Seed - Only supports fragments for now.   - (optional) conversation: QGPTConversation.  Output:   - persons: Persons

### Example {#persons_related-example}


```python
import pieces_os_client
from pieces_os_client.models.qgpt_persons_related_input import QGPTPersonsRelatedInput
from pieces_os_client.models.qgpt_persons_related_output import QGPTPersonsRelatedOutput
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = QGPT API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    qgpt_persons_related_input = pieces_os_client.QGPTPersonsRelatedInput() # QGPTPersonsRelatedInput |  (optional)

    try:
        # /qgpt/persons/related [POST]
        api_response = api_instance.persons_related(transferables=transferables, qgpt_persons_related_input=qgpt_persons_related_input)
        print("The response of QGPTApi->persons_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QGPTApi->persons_related: %s\n" % e)
```



### Parameters {#persons_related-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **qgpt_persons_related_input** | [**QGPTPersonsRelatedInput**](../models/QGPTPersonsRelatedInput)|  | [optional] 

### Return type {#persons_related-return-type}

[**QGPTPersonsRelatedOutput**](../models/QGPTPersonsRelatedOutput)

### Authorization {#persons_related-authorization}

No authorization required

### HTTP request headers {#persons_related-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#persons_related-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **qgpt_stream** {#qgpt_stream}
> QGPTStreamOutput qgpt_stream(qgpt_stream_input=qgpt_stream_input)

/qgpt/stream [WS]

Provides a WebSocket connection that streams inputs to the qGPT model. It handles relevance and questions, but will throw an error if both are passed in simultaneously. However, if you wish to utilize both question and relevance, you can obtain stream results by passing relevance with the option 'question:true'. It is designed to manage multiple conversations.

### Example {#qgpt_stream-example}


```python
import pieces_os_client
from pieces_os_client.models.qgpt_stream_input import QGPTStreamInput
from pieces_os_client.models.qgpt_stream_output import QGPTStreamOutput
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = QGPT API(api_client)
    qgpt_stream_input = pieces_os_client.QGPTStreamInput() # QGPTStreamInput |  (optional)

    try:
        # /qgpt/stream [WS]
        api_response = api_instance.qgpt_stream(qgpt_stream_input=qgpt_stream_input)
        print("The response of QGPTApi->qgpt_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QGPTApi->qgpt_stream: %s\n" % e)
```



### Parameters {#qgpt_stream-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgpt_stream_input** | [**QGPTStreamInput**](../models/QGPTStreamInput)|  | [optional] 

### Return type {#qgpt_stream-return-type}

[**QGPTStreamOutput**](../models/QGPTStreamOutput)

### Authorization {#qgpt_stream-authorization}

No authorization required

### HTTP request headers {#qgpt_stream-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#qgpt_stream-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**429** | Rate limit/Quota exceeded |  -  |
**500** | Internal Server Error |  -  |
**503** | The engine is currently overloaded |  -  |

## **question** {#question}
> QGPTQuestionOutput question(qgpt_question_input=qgpt_question_input)

/qgpt/question [POST]

Processes relevant code snippets or UUIDs returned from the /qgpt/relevance endpoint, along with a question query, to provide possible answers.  Note:   - Relevant seeds must either include an ID used within the /qgpt/relevance endpoint or a seed with a fragment/string; otherwise, an error will be thrown.   - This endpoint utilizes your query and relevant snippets to generate multiple answers, each accompanied by a score.

### Example {#question-example}


```python
import pieces_os_client
from pieces_os_client.models.qgpt_question_input import QGPTQuestionInput
from pieces_os_client.models.qgpt_question_output import QGPTQuestionOutput
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = QGPT API(api_client)
    qgpt_question_input = pieces_os_client.QGPTQuestionInput() # QGPTQuestionInput |  (optional)

    try:
        # /qgpt/question [POST]
        api_response = api_instance.question(qgpt_question_input=qgpt_question_input)
        print("The response of QGPTApi->question:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QGPTApi->question: %s\n" % e)
```



### Parameters {#question-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgpt_question_input** | [**QGPTQuestionInput**](../models/QGPTQuestionInput)|  | [optional] 

### Return type {#question-return-type}

[**QGPTQuestionOutput**](../models/QGPTQuestionOutput)

### Authorization {#question-authorization}

No authorization required

### HTTP request headers {#question-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#question-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**429** | Too Many Requests (Rate limit or quota exceeded) |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable, (engine is currently overloaded) |  -  |

## **relevance** {#relevance}
> QGPTRelevanceOutput relevance(qgpt_relevance_input=qgpt_relevance_input)

/qgpt/relevance [POST]

This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)

### Example {#relevance-example}


```python
import pieces_os_client
from pieces_os_client.models.qgpt_relevance_input import QGPTRelevanceInput
from pieces_os_client.models.qgpt_relevance_output import QGPTRelevanceOutput
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = QGPT API(api_client)
    qgpt_relevance_input = pieces_os_client.QGPTRelevanceInput() # QGPTRelevanceInput |  (optional)

    try:
        # /qgpt/relevance [POST]
        api_response = api_instance.relevance(qgpt_relevance_input=qgpt_relevance_input)
        print("The response of QGPTApi->relevance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QGPTApi->relevance: %s\n" % e)
```



### Parameters {#relevance-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgpt_relevance_input** | [**QGPTRelevanceInput**](../models/QGPTRelevanceInput)|  | [optional] 

### Return type {#relevance-return-type}

[**QGPTRelevanceOutput**](../models/QGPTRelevanceOutput)

### Authorization {#relevance-authorization}

No authorization required

### HTTP request headers {#relevance-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#relevance-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid Authentication, Incorrect API key provided or organization |  -  |
**429** | Too Many Requests (Rate limit or quota exceeded) |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable, (engine is currently overloaded) |  -  |

## **reprompt** {#reprompt}
> QGPTRepromptOutput reprompt(qgpt_reprompt_input=qgpt_reprompt_input)

/qgpt/reprompt [POST]

This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.

### Example {#reprompt-example}


```python
import pieces_os_client
from pieces_os_client.models.qgpt_reprompt_input import QGPTRepromptInput
from pieces_os_client.models.qgpt_reprompt_output import QGPTRepromptOutput
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = QGPT API(api_client)
    qgpt_reprompt_input = pieces_os_client.QGPTRepromptInput() # QGPTRepromptInput |  (optional)

    try:
        # /qgpt/reprompt [POST]
        api_response = api_instance.reprompt(qgpt_reprompt_input=qgpt_reprompt_input)
        print("The response of QGPTApi->reprompt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QGPTApi->reprompt: %s\n" % e)
```



### Parameters {#reprompt-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qgpt_reprompt_input** | [**QGPTRepromptInput**](../models/QGPTRepromptInput)|  | [optional] 

### Return type {#reprompt-return-type}

[**QGPTRepromptOutput**](../models/QGPTRepromptOutput)

### Authorization {#reprompt-authorization}

No authorization required

### HTTP request headers {#reprompt-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#reprompt-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

