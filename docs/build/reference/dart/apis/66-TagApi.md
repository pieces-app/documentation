# Tag API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagAssociateAsset**](TagApi#tagassociateasset) | **POST** /tag/\{tag\}/assets/associate/\{asset\} | /tag/\{tag\}/assets/associate/\{asset\} [POST]
[**tagAssociatePerson**](TagApi#tagassociateperson) | **POST** /tag/\{tag\}/persons/associate/\{person\} | /tag/\{tag\}/persons/associate/\{person\} [POST]
[**tagDisassociateAsset**](TagApi#tagdisassociateasset) | **POST** /tag/\{tag\}/assets/disassociate/\{asset\} | /tag/\{tag\}/assets/disassociate/\{asset\} [POST]
[**tagDisassociatePerson**](TagApi#tagdisassociateperson) | **POST** /tag/\{tag\}/persons/disassociate/\{person\} | /tag/\{tag\}/persons/disassociate/\{person\} [POST]
[**tagScoresIncrement**](TagApi#tagscoresincrement) | **POST** /tag/\{tag\}/scores/increment | '/tag/\{tag\}/scores/increment' [POST]
[**tagUpdate**](TagApi#tagupdate) | **POST** /tag/update | /tag/update [POST]
[**tagsSpecificTagSnapshot**](TagApi#tagsspecifictagsnapshot) | **GET** /tag/\{tag\} | /tag/\{tag\} [GET]


## **tagAssociateAsset** {#tagassociateasset}
> tagAssociateAsset(asset, tag)

/tag/\{tag\}/assets/associate/\{asset\} [POST]

This will associate a tag with a asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagApi();
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.
final tag = tag_example; // String | tag id

try {
    api_instance.tagAssociateAsset(asset, tag);
} catch (e) {
    print('Exception when calling TagApi->tagAssociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 
 **tag** | **String**| tag id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **tagAssociatePerson** {#tagassociateperson}
> tagAssociatePerson(tag, person)

/tag/\{tag\}/persons/associate/\{person\} [POST]

This will associate a tag with a person.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagApi();
final tag = tag_example; // String | tag id
final person = person_example; // String | This is a uuid that represents a person.

try {
    api_instance.tagAssociatePerson(tag, person);
} catch (e) {
    print('Exception when calling TagApi->tagAssociatePerson: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| tag id | 
 **person** | **String**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **tagDisassociateAsset** {#tagdisassociateasset}
> tagDisassociateAsset(tag, asset)

/tag/\{tag\}/assets/disassociate/\{asset\} [POST]

This will enable us to dissassociate a tag from a asset.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagApi();
final tag = tag_example; // String | tag id
final asset = 2254f2c8-5797-40e8-ac56-41166dc0e159; // String | The id (uuid) of the asset that you are trying to access.

try {
    api_instance.tagDisassociateAsset(tag, asset);
} catch (e) {
    print('Exception when calling TagApi->tagDisassociateAsset: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| tag id | 
 **asset** | **String**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **tagDisassociatePerson** {#tagdisassociateperson}
> tagDisassociatePerson(tag, person)

/tag/\{tag\}/persons/disassociate/\{person\} [POST]

This will enable us to dissassociate a tag from a person.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagApi();
final tag = tag_example; // String | tag id
final person = person_example; // String | This is a uuid that represents a person.

try {
    api_instance.tagDisassociatePerson(tag, person);
} catch (e) {
    print('Exception when calling TagApi->tagDisassociatePerson: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| tag id | 
 **person** | **String**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **tagScoresIncrement** {#tagscoresincrement}
> tagScoresIncrement(tag, seededScoreIncrement)

'/tag/\{tag\}/scores/increment' [POST]

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagApi();
final tag = tag_example; // String | tag id
final seededScoreIncrement = SeededScoreIncrement(); // SeededScoreIncrement | 

try {
    api_instance.tagScoresIncrement(tag, seededScoreIncrement);
} catch (e) {
    print('Exception when calling TagApi->tagScoresIncrement: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| tag id | 
 **seededScoreIncrement** | [**SeededScoreIncrement**](../models/SeededScoreIncrement)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **tagUpdate** {#tagupdate}
> Tag tagUpdate(transferables, tag)

/tag/update [POST]

This will update a specific tag.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagApi();
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)
final tag = Tag(); // Tag | 

try {
    final result = api_instance.tagUpdate(transferables, tag);
    print(result);
} catch (e) {
    print('Exception when calling TagApi->tagUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **tag** | [**Tag**](../models/Tag)|  | [optional] 

### Return type

[**Tag**](../models/Tag)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **tagsSpecificTagSnapshot** {#tagsspecifictagsnapshot}
> Tag tagsSpecificTagSnapshot(tag, transferables)

/tag/\{tag\} [GET]

This will get a specific tag.

### Example
```dart
import 'package:core_openapi/api.dart';

final api_instance = TagApi();
final tag = tag_example; // String | tag id
final transferables = true; // bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement)

try {
    final result = api_instance.tagsSpecificTagSnapshot(tag, transferables);
    print(result);
} catch (e) {
    print('Exception when calling TagApi->tagsSpecificTagSnapshot: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**| tag id | 
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Tag**](../models/Tag)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



