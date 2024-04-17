---
title: Conversations API | Python SDK
---

# Conversations API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversations_create_from_asset**](ConversationsApi#conversations_create_from_asset) | **POST** /conversations/create/from_asset/\{asset\} | /conversations/create/from_asset/\{asset\} [POST]
[**conversations_create_specific_conversation**](ConversationsApi#conversations_create_specific_conversation) | **POST** /conversations/create | /conversations/create [POST]
[**conversations_delete_specific_conversation**](ConversationsApi#conversations_delete_specific_conversation) | **POST** /conversations/\{conversation\}/delete | /conversations/\{conversation\}/delete [POST]
[**conversations_identifiers_snapshot**](ConversationsApi#conversations_identifiers_snapshot) | **GET** /conversations/identifiers | /conversations/identifiers [GET]
[**conversations_snapshot**](ConversationsApi#conversations_snapshot) | **GET** /conversations | /conversations [GET]
[**conversations_stream_identifiers**](ConversationsApi#conversations_stream_identifiers) | **GET** /conversations/stream/identifiers | /conversations/stream/identifiers [WS]


## **conversations_create_from_asset** {#conversations_create_from_asset}
> ConversationsCreateFromAssetOutput conversations_create_from_asset(asset)

/conversations/create/from_asset/\{asset\} [POST]

Creates a conversation based on an asset. It initiates a conversation and generates an initial message that includes a summary of the asset used as contextual grounding.

### Example {#conversations_create_from_asset-example}


```python
import pieces_os_client
from pieces_os_client.models.conversations_create_from_asset_output import ConversationsCreateFromAssetOutput
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
    api_instance = Conversations API(api_client)
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /conversations/create/from_asset/\{asset\} [POST]
        api_response = api_instance.conversations_create_from_asset(asset)
        print("The response of ConversationsApi->conversations_create_from_asset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_create_from_asset: %s\n" % e)
```



### Parameters {#conversations_create_from_asset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type {#conversations_create_from_asset-return-type}

[**ConversationsCreateFromAssetOutput**](../models/ConversationsCreateFromAssetOutput)

### Authorization {#conversations_create_from_asset-authorization}

No authorization required

### HTTP request headers {#conversations_create_from_asset-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#conversations_create_from_asset-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversations_create_specific_conversation** {#conversations_create_specific_conversation}
> Conversation conversations_create_specific_conversation(transferables=transferables, seeded_conversation=seeded_conversation)

/conversations/create [POST]

Creates a specific conversation.

### Example {#conversations_create_specific_conversation-example}


```python
import pieces_os_client
from pieces_os_client.models.conversation import Conversation
from pieces_os_client.models.seeded_conversation import SeededConversation
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
    api_instance = Conversations API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_conversation = pieces_os_client.SeededConversation() # SeededConversation |  (optional)

    try:
        # /conversations/create [POST]
        api_response = api_instance.conversations_create_specific_conversation(transferables=transferables, seeded_conversation=seeded_conversation)
        print("The response of ConversationsApi->conversations_create_specific_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_create_specific_conversation: %s\n" % e)
```



### Parameters {#conversations_create_specific_conversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_conversation** | [**SeededConversation**](../models/SeededConversation)|  | [optional] 

### Return type {#conversations_create_specific_conversation-return-type}

[**Conversation**](../models/Conversation)

### Authorization {#conversations_create_specific_conversation-authorization}

No authorization required

### HTTP request headers {#conversations_create_specific_conversation-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#conversations_create_specific_conversation-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversations_delete_specific_conversation** {#conversations_delete_specific_conversation}
> conversations_delete_specific_conversation(conversation)

/conversations/\{conversation\}/delete [POST]

Deletes a specific conversation.

### Example {#conversations_delete_specific_conversation-example}


```python
import pieces_os_client
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
    api_instance = Conversations API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.

    try:
        # /conversations/\{conversation\}/delete [POST]
        api_instance.conversations_delete_specific_conversation(conversation)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_delete_specific_conversation: %s\n" % e)
```



### Parameters {#conversations_delete_specific_conversation-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 

### Return type {#conversations_delete_specific_conversation-return-type}

void (empty response body)

### Authorization {#conversations_delete_specific_conversation-authorization}

No authorization required

### HTTP request headers {#conversations_delete_specific_conversation-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#conversations_delete_specific_conversation-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **conversations_identifiers_snapshot** {#conversations_identifiers_snapshot}
> FlattenedConversations conversations_identifiers_snapshot()

/conversations/identifiers [GET]

Retrieves all the UUIDs associated with a Conversation.

### Example {#conversations_identifiers_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.flattened_conversations import FlattenedConversations
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
    api_instance = Conversations API(api_client)

    try:
        # /conversations/identifiers [GET]
        api_response = api_instance.conversations_identifiers_snapshot()
        print("The response of ConversationsApi->conversations_identifiers_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_identifiers_snapshot: %s\n" % e)
```



### Parameters {#conversations_identifiers_snapshot-parameters}

This endpoint does not need any parameters.

### Return type {#conversations_identifiers_snapshot-return-type}

[**FlattenedConversations**](../models/FlattenedConversations)

### Authorization {#conversations_identifiers_snapshot-authorization}

No authorization required

### HTTP request headers {#conversations_identifiers_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#conversations_identifiers_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversations_snapshot** {#conversations_snapshot}
> Conversations conversations_snapshot(transferables=transferables)

/conversations [GET]

Retrieves a snapshot of a specific conversation.

### Example {#conversations_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.conversations import Conversations
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
    api_instance = Conversations API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /conversations [GET]
        api_response = api_instance.conversations_snapshot(transferables=transferables)
        print("The response of ConversationsApi->conversations_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_snapshot: %s\n" % e)
```



### Parameters {#conversations_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#conversations_snapshot-return-type}

[**Conversations**](../models/Conversations)

### Authorization {#conversations_snapshot-authorization}

No authorization required

### HTTP request headers {#conversations_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#conversations_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **conversations_stream_identifiers** {#conversations_stream_identifiers}
> conversations_stream_identifiers()

/conversations/stream/identifiers [WS]

Provides a WebSocket connection that emits changes to your conversation identifiers (UUIDs).

### Example {#conversations_stream_identifiers-example}


```python
import pieces_os_client
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
    api_instance = Conversations API(api_client)

    try:
        # /conversations/stream/identifiers [WS]
        api_instance.conversations_stream_identifiers()
    except Exception as e:
        print("Exception when calling ConversationsApi->conversations_stream_identifiers: %s\n" % e)
```



### Parameters {#conversations_stream_identifiers-parameters}

This endpoint does not need any parameters.

### Return type {#conversations_stream_identifiers-return-type}

void (empty response body)

### Authorization {#conversations_stream_identifiers-authorization}

No authorization required

### HTTP request headers {#conversations_stream_identifiers-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: Not defined


