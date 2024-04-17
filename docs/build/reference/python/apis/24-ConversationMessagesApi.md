# ConversationMessages API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messages_create_specific_message**](ConversationMessagesApi#messages_create_specific_message) | **POST** /messages/create | /messages/create [POST]
[**messages_delete_specific_message**](ConversationMessagesApi#messages_delete_specific_message) | **POST** /messages/\{message\}/delete | /messages/\{message\}/delete [POST]
[**messages_snapshot**](ConversationMessagesApi#messages_snapshot) | **GET** /messages | /messages [GET]


## **messages_create_specific_message** {#messages_create_specific_message}
> ConversationMessage messages_create_specific_message(transferables=transferables, seeded_conversation_message=seeded_conversation_message)

/messages/create [POST]

This will create a Message on a specific conversation.

### Example


```python
import pieces_os_client
from pieces_os_client.models.conversation_message import ConversationMessage
from pieces_os_client.models.seeded_conversation_message import SeededConversationMessage
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
    api_instance = pieces_os_client.ConversationMessagesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_conversation_message = pieces_os_client.SeededConversationMessage() # SeededConversationMessage |  (optional)

    try:
        # /messages/create [POST]
        api_response = api_instance.messages_create_specific_message(transferables=transferables, seeded_conversation_message=seeded_conversation_message)
        print("The response of ConversationMessagesApi->messages_create_specific_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationMessagesApi->messages_create_specific_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_conversation_message** | [**SeededConversationMessage**](../models/SeededConversationMessage)|  | [optional] 

### Return type

[**ConversationMessage**](../models/ConversationMessage)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **messages_delete_specific_message** {#messages_delete_specific_message}
> messages_delete_specific_message(message)

/messages/\{message\}/delete [POST]

This will delete a specific message.

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
    api_instance = pieces_os_client.ConversationMessagesApi(api_client)
    message = 'message_example' # str | This is the uuid of a message.

    try:
        # /messages/\{message\}/delete [POST]
        api_instance.messages_delete_specific_message(message)
    except Exception as e:
        print("Exception when calling ConversationMessagesApi->messages_delete_specific_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **str**| This is the uuid of a message. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **messages_snapshot** {#messages_snapshot}
> ConversationMessages messages_snapshot(transferables=transferables)

/messages [GET]

This will get all the messages.

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
    api_instance = pieces_os_client.ConversationMessagesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /messages [GET]
        api_response = api_instance.messages_snapshot(transferables=transferables)
        print("The response of ConversationMessagesApi->messages_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversationMessagesApi->messages_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**ConversationMessages**](../models/ConversationMessages)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



