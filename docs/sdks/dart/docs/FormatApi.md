# core_openapi.api.FormatApi

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**formatAnalysis**](FormatApi#formatanalysis) | **GET** /format/{format}/analysis | /format/{format}/analysis [GET]
[**formatReclassify**](FormatApi#formatreclassify) | **POST** /format/reclassify | /format/reclassify [POST]
[**formatSnapshot**](FormatApi#formatsnapshot) | **GET** /format/{format} | /format/{format} [GET] Scoped to Format
[**formatUpdateValue**](FormatApi#formatupdatevalue) | **POST** /format/update/value | [POST] /format/update/value
[**formatUsageEvent**](FormatApi#formatusageevent) | **POST** /format/usage/event | /format/usage/event [POST] Scoped to Format


# **formatAnalysis**
> Analysis formatAnalysis(format)

/format/{format}/analysis [GET]

This will get an analysis from a format's id.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = FormatApi();
final format = 102ff265-fdfb-4142-8d94-4932d400199c; // String | The id (uuid) for a specific format.

try {
    final result = api_instance.formatAnalysis(format);
    print(result);
} catch (e) {
    print('Exception when calling FormatApi->formatAnalysis: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**| The id (uuid) for a specific format. | 

### Return type

[**Analysis**](Analysis)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **formatReclassify**
> Format formatReclassify(transferable, formatReclassification)

/format/reclassify [POST]

This endpoint will be used to reclassify a single Format.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = FormatApi();
final transferable = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final formatReclassification = FormatReclassification(); // FormatReclassification | 

try {
    final result = api_instance.formatReclassify(transferable, formatReclassification);
    print(result);
} catch (e) {
    print('Exception when calling FormatApi->formatReclassify: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferable** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **formatReclassification** | [**FormatReclassification**](FormatReclassification)|  | [optional] 

### Return type

[**Format**](Format)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **formatSnapshot**
> Format formatSnapshot(format, transferable)

/format/{format} [GET] Scoped to Format

Get a snapshot of a specific format.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = FormatApi();
final format = 102ff265-fdfb-4142-8d94-4932d400199c; // String | The id (uuid) for a specific format.
final transferable = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.formatSnapshot(format, transferable);
    print(result);
} catch (e) {
    print('Exception when calling FormatApi->formatSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**| The id (uuid) for a specific format. | 
 **transferable** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Format**](Format)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **formatUpdateValue**
> Format formatUpdateValue(transferable, format)

[POST] /format/update/value

This will update a format's value, ie, a formats fragment or file depending on what is provided.  code/text fragment behavior: If this format is an asset.preview.base we will update the asset.original's value. if this format is an asset.preview.original we will update the asset.preview.base's value.  code/text file behavior: If the the format that is update is the asset.preview.base is a fragment and the asset.original is file then we will update the asset.original's value to be bytes or string respectively. This goes the same for orignal to preview but will be go the reverse order so if the original is a file we will update the preview base's fragment string.  image fragment/file: We will not modify preview -> orignal or original -> preview here. so there are zero side effects in this case, and will update as normal. (this will be the case for all other value updates.)

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = FormatApi();
final transferable = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final format = Format(); // Format | This is the format that you want to update.

try {
    final result = api_instance.formatUpdateValue(transferable, format);
    print(result);
} catch (e) {
    print('Exception when calling FormatApi->formatUpdateValue: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferable** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **format** | [**Format**](Format)| This is the format that you want to update. | [optional] 

### Return type

[**Format**](Format)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **formatUsageEvent**
> TrackedFormatEvent formatUsageEvent(seededTrackedFormatEvent)

/format/usage/event [POST] Scoped to Format

This is an analytics endpoint that will enable us to know when a user has copied/downloaded/beamed/viewed a format.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = FormatApi();
final seededTrackedFormatEvent = SeededTrackedFormatEvent(); // SeededTrackedFormatEvent | This is a SeededTrackedFormatEvent, per tracked event:)

try {
    final result = api_instance.formatUsageEvent(seededTrackedFormatEvent);
    print(result);
} catch (e) {
    print('Exception when calling FormatApi->formatUsageEvent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededTrackedFormatEvent** | [**SeededTrackedFormatEvent**](SeededTrackedFormatEvent)| This is a SeededTrackedFormatEvent, per tracked event:) | [optional] 

### Return type

[**TrackedFormatEvent**](TrackedFormatEvent)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

