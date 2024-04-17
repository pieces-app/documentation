---
title: Conversation API | Python SDK
---

# Conversation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conversation_associate_anchor**](ConversationApi#conversation_associate_anchor) | **POST** /conversation/\{conversation\}/anchors/associate/\{anchor\} | /conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]
[**conversation_associate_asset**](ConversationApi#conversation_associate_asset) | **POST** /conversation/\{conversation\}/assets/associate/\{asset\} | /conversation/\{conversation\}/assets/associate/\{asset\} [POST]
[**conversation_associate_grounding_temporal_range_workstream**](ConversationApi#conversation_associate_grounding_temporal_range_workstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/associate/\{range\} | /conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]
[**conversation_associate_website**](ConversationApi#conversation_associate_website) | **POST** /conversation/\{conversation\}/websites/associate/\{website\} | /conversation/\{conversation\}/websites/associate/\{website\} [POST]
[**conversation_associate_workstream_summary**](ConversationApi#conversation_associate_workstream_summary) | **POST** /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**conversation_disassociate_anchor**](ConversationApi#conversation_disassociate_anchor) | **POST** /conversation/\{conversation\}/anchors/delete/\{anchor\} | /conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]
[**conversation_disassociate_asset**](ConversationApi#conversation_disassociate_asset) | **POST** /conversation/\{conversation\}/assets/delete/\{asset\} | /conversation/\{conversation\}/assets/delete/\{asset\} [POST]
[**conversation_disassociate_grounding_temporal_range_workstream**](ConversationApi#conversation_disassociate_grounding_temporal_range_workstream) | **POST** /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} | /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]
[**conversation_disassociate_website**](ConversationApi#conversation_disassociate_website) | **POST** /conversation/\{conversation\}/websites/disassociate/\{website\} | /website/\{website\}/websites/disassociate/\{website\} [POST]
[**conversation_disassociate_workstream_summary**](ConversationApi#conversation_disassociate_workstream_summary) | **POST** /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} | /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**conversation_get_specific_conversation**](ConversationApi#conversation_get_specific_conversation) | **GET** /conversation/\{conversation\} | /conversation/\{conversation\} [GET]
[**conversation_grounding_messages_associate_message**](ConversationApi#conversation_grounding_messages_associate_message) | **POST** /conversation/\{conversation\}/grounding/messages/associate/\{message\} | /conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]
[**conversation_grounding_messages_disassociate_message**](ConversationApi#conversation_grounding_messages_disassociate_message) | **POST** /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} | /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]
[**conversation_scores_increment**](ConversationApi#conversation_scores_increment) | **POST** /conversation/\{conversation\}/scores/increment | /conversation/\{conversation\}/scores/increment [POST]
[**conversation_specific_conversation_messages**](ConversationApi#conversation_specific_conversation_messages) | **GET** /conversation/\{conversation\}/messages | /conversation/\{conversation\}/messages [GET]
[**conversation_specific_conversation_rename**](ConversationApi#conversation_specific_conversation_rename) | **POST** /conversation/\{conversation\}/rename | /conversation/\{conversation\}/rename [POST]
[**conversation_summarize**](ConversationApi#conversation_summarize) | **POST** /conversation/\{conversation\}/summarize | /conversation/\{conversation\}/summarize [POST]
[**conversation_update**](ConversationApi#conversation_update) | **POST** /conversation/update | /conversation/update [POST]


## **conversation_associate_anchor** {#conversation_associate_anchor}
> conversation_associate_anchor(conversation, anchor)

/conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]

Updates both the anchor and the conversation, associating them together.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    anchor = 'anchor_example' # str | This is the specific uuid of an anchor.

    try:
        # /conversation/\{conversation\}/anchors/associate/\{anchor\} [POST]
        api_instance.conversation_associate_anchor(conversation, anchor)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_associate_anchor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **anchor** | **str**| This is the specific uuid of an anchor. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_associate_asset** {#conversation_associate_asset}
> conversation_associate_asset(conversation, asset)

/conversation/\{conversation\}/assets/associate/\{asset\} [POST]

Updates both the asset and the conversation, associating the two together.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /conversation/\{conversation\}/assets/associate/\{asset\} [POST]
        api_instance.conversation_associate_asset(conversation, asset)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_associate_asset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_associate_grounding_temporal_range_workstream** {#conversation_associate_grounding_temporal_range_workstream}
> conversation_associate_grounding_temporal_range_workstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]

This will associate a workstream(range) with a conversation. This will do the same thing as the range equivalent.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.

    try:
        # /conversation/\{conversation\}/grounding/temporal/ranges/associate/\{range\} [POST]
        api_instance.conversation_associate_grounding_temporal_range_workstream(conversation, range)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_associate_grounding_temporal_range_workstream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **range** | **str**| This is a identifier that is used to identify a specific range. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_associate_website** {#conversation_associate_website}
> conversation_associate_website(conversation, website)

/conversation/\{conversation\}/websites/associate/\{website\} [POST]

Updates both the website and the conversation, and associate them together.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    website = 'website_example' # str | website id

    try:
        # /conversation/\{conversation\}/websites/associate/\{website\} [POST]
        api_instance.conversation_associate_website(conversation, website)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_associate_website: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **website** | **str**| website id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_associate_workstream_summary** {#conversation_associate_workstream_summary}
> conversation_associate_workstream_summary(conversation, workstream_summary)

/conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]

This will associate a conversation with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /conversation/\{conversation\}/workstream_summaries/associate/\{workstream_summary\} [POST]
        api_instance.conversation_associate_workstream_summary(conversation, workstream_summary)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_associate_workstream_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_disassociate_anchor** {#conversation_disassociate_anchor}
> conversation_disassociate_anchor(conversation, anchor)

/conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]

Updates both the anchor and the conversation, deleting (disassociating) them simultaneously.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    anchor = 'anchor_example' # str | This is the specific uuid of an anchor.

    try:
        # /conversation/\{conversation\}/anchors/delete/\{anchor\} [POST]
        api_instance.conversation_disassociate_anchor(conversation, anchor)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_disassociate_anchor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **anchor** | **str**| This is the specific uuid of an anchor. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_disassociate_asset** {#conversation_disassociate_asset}
> conversation_disassociate_asset(conversation, asset)

/conversation/\{conversation\}/assets/delete/\{asset\} [POST]

Updates both the asset and the conversation, effectively disassociating them.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /conversation/\{conversation\}/assets/delete/\{asset\} [POST]
        api_instance.conversation_disassociate_asset(conversation, asset)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_disassociate_asset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_disassociate_grounding_temporal_range_workstream** {#conversation_disassociate_grounding_temporal_range_workstream}
> conversation_disassociate_grounding_temporal_range_workstream(conversation, range)

/conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]

This will enable us to disassociate a workstream(range) from a conversation. This will do the same thing as the range equivalent.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    range = 'range_example' # str | This is a identifier that is used to identify a specific range.

    try:
        # /conversation/\{conversation\}/grounding/temporal_range/workstreams/disassociate/\{range\} [POST]
        api_instance.conversation_disassociate_grounding_temporal_range_workstream(conversation, range)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_disassociate_grounding_temporal_range_workstream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **range** | **str**| This is a identifier that is used to identify a specific range. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_disassociate_website** {#conversation_disassociate_website}
> conversation_disassociate_website(conversation, website)

/website/\{website\}/websites/disassociate/\{website\} [POST]

Allows us to disassociate a conversation from a specific website

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    website = 'website_example' # str | website id

    try:
        # /website/\{website\}/websites/disassociate/\{website\} [POST]
        api_instance.conversation_disassociate_website(conversation, website)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_disassociate_website: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **website** | **str**| website id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_disassociate_workstream_summary** {#conversation_disassociate_workstream_summary}
> conversation_disassociate_workstream_summary(conversation, workstream_summary)

/conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]

This will enable us to disassociate an conversation from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    workstream_summary = 'workstream_summary_example' # str | This is a identifier that is used to identify a specific workstream_summary.

    try:
        # /conversation/\{conversation\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
        api_instance.conversation_disassociate_workstream_summary(conversation, workstream_summary)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_disassociate_workstream_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **workstream_summary** | **str**| This is a identifier that is used to identify a specific workstream_summary. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_get_specific_conversation** {#conversation_get_specific_conversation}
> Conversation conversation_get_specific_conversation(conversation, transferables=transferables)

/conversation/\{conversation\} [GET]

Retrieves a specific conversation.

### Example


```python
import pieces_os_client
from pieces_os_client.models.conversation import Conversation
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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /conversation/\{conversation\} [GET]
        api_response = api_instance.conversation_get_specific_conversation(conversation, transferables=transferables)
        print("The response of ConversationApi->conversation_get_specific_conversation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_get_specific_conversation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**410** | Website not found. |  -  |



## **conversation_grounding_messages_associate_message** {#conversation_grounding_messages_associate_message}
> conversation_grounding_messages_associate_message(conversation, message)

/conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]

Stores the grounding context for a conversation. It allows to associate a message with the conversation's grounding object, facilitating contextual understanding and management of the conversation.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    message = 'message_example' # str | This is the uuid of a message.

    try:
        # /conversation/\{conversation\}/grounding/messages/associate/\{message\} [POST]
        api_instance.conversation_grounding_messages_associate_message(conversation, message)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_grounding_messages_associate_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **message** | **str**| This is the uuid of a message. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_grounding_messages_disassociate_message** {#conversation_grounding_messages_disassociate_message}
> conversation_grounding_messages_disassociate_message(conversation, message)

/conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]

Removes a specific grounding context for a conversation, and allows us to disassociate a message from the conversation's grounding object.

### Example


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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    message = 'message_example' # str | This is the uuid of a message.

    try:
        # /conversation/\{conversation\}/grounding/messages/disassociate/\{message\} [POST]
        api_instance.conversation_grounding_messages_disassociate_message(conversation, message)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_grounding_messages_disassociate_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **message** | **str**| This is the uuid of a message. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_scores_increment** {#conversation_scores_increment}
> conversation_scores_increment(conversation, seeded_score_increment=seeded_score_increment)

/conversation/\{conversation\}/scores/increment [POST]

Increment scores associated with a conversation. It accepts a SeededScoreIncrement object as input to adjust the scores accordingly based on the provided data.

### Example


```python
import pieces_os_client
from pieces_os_client.models.seeded_score_increment import SeededScoreIncrement
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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    seeded_score_increment = pieces_os_client.SeededScoreIncrement() # SeededScoreIncrement |  (optional)

    try:
        # /conversation/\{conversation\}/scores/increment [POST]
        api_instance.conversation_scores_increment(conversation, seeded_score_increment=seeded_score_increment)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_scores_increment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **seeded_score_increment** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **conversation_specific_conversation_messages** {#conversation_specific_conversation_messages}
> ConversationMessages conversation_specific_conversation_messages(conversation, transferables=transferables)

/conversation/\{conversation\}/messages [GET]

Retrieves messages specific to a particular conversation.

### Example


```python
import pieces_os_client
from pieces_os_client.models.conversation_messages import ConversationMessages
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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /conversation/\{conversation\}/messages [GET]
        api_response = api_instance.conversation_specific_conversation_messages(conversation, transferables=transferables)
        print("The response of ConversationApi->conversation_specific_conversation_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_specific_conversation_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**ConversationMessages**](../models/ConversationMessages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversation_specific_conversation_rename** {#conversation_specific_conversation_rename}
> Conversation conversation_specific_conversation_rename(conversation, transferables=transferables)

/conversation/\{conversation\}/rename [POST]

Renames a specific conversation using machine learning (ML) techniques.

### Example


```python
import pieces_os_client
from pieces_os_client.models.conversation import Conversation
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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /conversation/\{conversation\}/rename [POST]
        api_response = api_instance.conversation_specific_conversation_rename(conversation, transferables=transferables)
        print("The response of ConversationApi->conversation_specific_conversation_rename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_specific_conversation_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversation_summarize** {#conversation_summarize}
> ConversationSummarizeOutput conversation_summarize(conversation, conversation_summarize_input=conversation_summarize_input)

/conversation/\{conversation\}/summarize [POST]

Generates a summary of a given conversation and saves it as an annotation associated with the conversation. It returns a reference to the annotation, which serves as the summary.

### Example


```python
import pieces_os_client
from pieces_os_client.models.conversation_summarize_input import ConversationSummarizeInput
from pieces_os_client.models.conversation_summarize_output import ConversationSummarizeOutput
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
    api_instance = Conversation API(api_client)
    conversation = 'conversation_example' # str | This is the uuid of a conversation.
    conversation_summarize_input = pieces_os_client.ConversationSummarizeInput() # ConversationSummarizeInput |  (optional)

    try:
        # /conversation/\{conversation\}/summarize [POST]
        api_response = api_instance.conversation_summarize(conversation, conversation_summarize_input=conversation_summarize_input)
        print("The response of ConversationApi->conversation_summarize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_summarize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation** | **str**| This is the uuid of a conversation. | 
 **conversation_summarize_input** | [**ConversationSummarizeInput**](../models/ConversationSummarizeInput)|  | [optional] 

### Return type

[**ConversationSummarizeOutput**](../models/ConversationSummarizeOutput)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **conversation_update** {#conversation_update}
> Conversation conversation_update(transferables=transferables, conversation=conversation)

/conversation/update [POST]

Updates a specific conversation.

### Example


```python
import pieces_os_client
from pieces_os_client.models.conversation import Conversation
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
    api_instance = Conversation API(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    conversation = pieces_os_client.Conversation() # Conversation |  (optional)

    try:
        # /conversation/update [POST]
        api_response = api_instance.conversation_update(transferables=transferables, conversation=conversation)
        print("The response of ConversationApi->conversation_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationApi->conversation_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **conversation** | [**Conversation**](../models/Conversation)|  | [optional] 

### Return type

[**Conversation**](../models/Conversation)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



