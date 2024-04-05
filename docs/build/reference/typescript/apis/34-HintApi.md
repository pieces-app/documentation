# Hint API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hintScoresIncrement**](HintApi#hintscoresincrement) | **POST** /hint/\{hint\}/scores/increment | \&#39;/hint/\{hint\}/scores/increment\&#39; [POST]
[**hintSpecificHintSnapshot**](HintApi#hintspecifichintsnapshot) | **GET** /hint/\{hint\} | /hint/\{hint\} [POST]
[**hintUpdate**](HintApi#hintupdate) | **POST** /hint/update | /hint/update [POST]


## **hintScoresIncrement**
> hintScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.HintApi(configuration);

let body:.HintApiHintScoresIncrementRequest = {
    // string | This is a specific hint uuid
    hint: hint_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.hintScoresIncrement(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **hintSpecificHintSnapshot**
> Hint hintSpecificHintSnapshot()

This will get a snapshot of a specific hint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.HintApi(configuration);

let body:.HintApiHintSpecificHintSnapshotRequest = {
    // string | This is a specific hint uuid
    hint: hint_example,
};

apiInstance.hintSpecificHintSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return type

**Hint**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **hintUpdate**
> Hint hintUpdate()

This will update a specific hint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.HintApi(configuration);

let body:.HintApiHintUpdateRequest = {
    // Hint (optional)
    hint: ,
};

apiInstance.hintUpdate(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **Hint**|  |


### Return type

**Hint**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)


