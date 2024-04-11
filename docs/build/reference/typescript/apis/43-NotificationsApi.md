# Notifications Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendLocalNotification**](NotificationsApi#sendlocalnotification) | **POST** /notifications/local/send | Send notification


## **sendLocalNotification** {#sendlocalnotification}
> sendLocalNotification()

Retrieves a snapshot of all available models.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.NotificationsApi(configuration)

const body: Pieces.SendLocalNotificationRequest = {
    // Notification (optional)
    notification: ,
};

apiInstance.sendLocalNotification(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | **Notification**|  |


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: Not defined


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


