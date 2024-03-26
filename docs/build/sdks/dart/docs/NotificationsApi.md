# Notifications API

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendLocalNotification**](NotificationsApi#sendlocalnotification) | **POST** /notifications/local/send | Send notification


## **sendLocalNotification**
> sendLocalNotification(notification)

Send notification

This one is to universaly send notifications from any member of the system

### Example
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



