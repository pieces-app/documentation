# core_openapi.api.AnchorsApi

## Load the API package
```dart
import 'package:core_openapi/api.dart';
```

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anchorDisassociateAsset**](AnchorsApi#anchordisassociateasset) | **POST** /anchors/{anchor}/assets/delete/{asset} | /anchors/{anchor}/assets/delete/{asset} [POST]
[**anchorsCreateNewAnchor**](AnchorsApi#anchorscreatenewanchor) | **POST** /anchors/create | /anchors/create [POST]
[**anchorsDeleteSpecificAnchor**](AnchorsApi#anchorsdeletespecificanchor) | **POST** /anchors/{anchor}/delete | /anchors/{anchor}/delete [POST]
[**anchorsSnapshot**](AnchorsApi#anchorssnapshot) | **GET** /anchors | /anchors [GET]


# **anchorDisassociateAsset**
> anchorDisassociateAsset(anchor, asset)

/anchors/{anchor}/assets/delete/{asset} [POST]

This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorsApi();
final anchor = anchor_example; // String | This is the specific uuid of an anchor.
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.anchorDisassociateAsset(anchor, asset);
} catch (e) {
    print('Exception when calling AnchorsApi->anchorDisassociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String**| This is the specific uuid of an anchor. | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **anchorsCreateNewAnchor**
> Anchor anchorsCreateNewAnchor(transferables, seededAnchor)

/anchors/create [POST]

This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final seededAnchor = SeededAnchor(); // SeededAnchor | 

try {
    final result = api_instance.anchorsCreateNewAnchor(transferables, seededAnchor);
    print(result);
} catch (e) {
    print('Exception when calling AnchorsApi->anchorsCreateNewAnchor: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seededAnchor** | [**SeededAnchor**](SeededAnchor)|  | [optional] 

### Return type

[**Anchor**](Anchor)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **anchorsDeleteSpecificAnchor**
> anchorsDeleteSpecificAnchor(anchor)

/anchors/{anchor}/delete [POST]

This will delete a specific anchor!

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorsApi();
final anchor = anchor_example; // String | This is the specific uuid of an anchor.

try {
    api_instance.anchorsDeleteSpecificAnchor(anchor);
} catch (e) {
    print('Exception when calling AnchorsApi->anchorsDeleteSpecificAnchor: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchor** | **String**| This is the specific uuid of an anchor. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

# **anchorsSnapshot**
> Anchors anchorsSnapshot(transferables)

/anchors [GET]

This will get a snapshot of all your anchors.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = AnchorsApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.anchorsSnapshot(transferables);
    print(result);
} catch (e) {
    print('Exception when calling AnchorsApi->anchorsSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Anchors**](Anchors)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to Model list]](../README#documentation-for-models) [[Back to README]](../README)

