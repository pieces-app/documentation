# Notifications API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendLocalNotification**](#sendlocalnotification) | **POST** /notifications/local/send | Send notification


<a id="sendLocalNotification"></a>
## **sendLocalNotification**
> sendLocalNotification(notification)

Send notification

This one is to universaly send notifications from any member of the system

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = NotificationsApi()
val notification : Notification =  // Notification | 
try {
    apiInstance.sendLocalNotification(notification)
} catch (e: ClientException) {
    println("4xx response calling NotificationsApi#sendLocalNotification")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling NotificationsApi#sendLocalNotification")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | [**Notification**](../models/Notification)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

