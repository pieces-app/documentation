# Notifications API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_local_notification**](NotificationsApi#send_local_notification) | **POST** /notifications/local/send | Send notification


## **send_local_notification**
> send_local_notification(notification=notification)

Send notification

This one is to universaly send notifications from any member of the system

### Example


```python
import pieces_os_client
from pieces_os_client.models.notification import Notification
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
    api_instance = pieces_os_client.NotificationsApi(api_client)
    notification = pieces_os_client.Notification() # Notification |  (optional)

    try:
        # Send notification
        api_instance.send_local_notification(notification=notification)
    except Exception as e:
        print("Exception when calling NotificationsApi->send_local_notification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | [**Notification**](Notification)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

