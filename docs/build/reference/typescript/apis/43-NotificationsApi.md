---
title: Notifications API | TypeScript SDK
---

# Notifications API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendLocalNotification**](NotificationsApi#sendlocalnotification) | **POST** /notifications/local/send | Send notification


## **sendLocalNotification** {#sendlocalnotification}
> sendLocalNotification()

Retrieves a snapshot of all available models.

### Example {#sendlocalnotification-example}

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

### Parameters {#sendlocalnotification-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | **Notification**|  |


### Return type {#sendlocalnotification-return-type}

void (empty response body)

### HTTP request headers {#sendlocalnotification-http-request-headers}

- **Content-Type**: application/json
- **Accept**: Not defined


### HTTP response details {#sendlocalnotification-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


