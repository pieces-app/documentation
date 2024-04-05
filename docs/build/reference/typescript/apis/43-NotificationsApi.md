# Notifications API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendLocalNotification**](NotificationsApi#sendlocalnotification) | **POST** /notifications/local/send | Send notification


## **sendLocalNotification** Deprecated: 
> sendLocalNotification()

This one is to universaly send notifications from any member of the system

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.NotificationsApi(configuration);

const body: Pieces.SendLocalNotificationRequest = {
    // Notification (optional)
    notification: ,
};

apiInstance.sendLocalNotification(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | **Notification**|  |


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




