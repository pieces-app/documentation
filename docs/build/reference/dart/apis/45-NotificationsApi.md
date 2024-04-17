---
title: Notifications API | Dart SDK
---

# Notifications API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendLocalNotification**](NotificationsApi#sendlocalnotification) | **POST** /notifications/local/send | Send notification


## **sendLocalNotification** {#sendlocalnotification}
> sendLocalNotification(notification)

Send notification

Retrieves a snapshot of all available models.

### Example {#sendlocalnotification-example}
```dart
import 'package:core_openapi/api.dart';

final api_instance = NotificationsApi();
final notification = Notification(); // Notification | 

try {
    api_instance.sendLocalNotification(notification);
} catch (e) {
    print('Exception when calling NotificationsApi->sendLocalNotification: $e\n');
}
```

### Parameters {#sendlocalnotification-parameters}

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | [**Notification**](../models/Notification) |  | [optional] 

### Return type {#sendlocalnotification-return-type}

void (empty response body)

### Authorization {#sendlocalnotification-authorization}

No authorization required

### HTTP request headers {#sendlocalnotification-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: Not defined

