# Hint API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**hintScoresIncrement****](HintApi#hintscoresincrement) | **POST** /hint/\{hint\}/scores/increment
[**hintSpecificHintSnapshot****](HintApi#hintspecifichintsnapshot) | **GET** /hint/\{hint\}
[**hintUpdate****](HintApi#hintupdate) | **POST** /hint/update


## **hintScoresIncrement** {#hintscoresincrement}
> hintScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintApi(configuration)

const body: Pieces.HintScoresIncrementRequest = {
    // string | This is a specific hint uuid
    hint: hint_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.hintScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **hintSpecificHintSnapshot** {#hintspecifichintsnapshot}
> Hint hintSpecificHintSnapshot()

This will get a snapshot of a specific hint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintApi(configuration)

const body: Pieces.HintSpecificHintSnapshotRequest = {
    // string | This is a specific hint uuid
    hint: hint_example,
};

apiInstance.hintSpecificHintSnapshot(body).then((data: Hint) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return type

[**Hint**](../models/Hint)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **hintUpdate** {#hintupdate}
> Hint hintUpdate()

This will update a specific hint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintApi(configuration)

const body: Pieces.HintUpdateRequest = {
    // Hint (optional)
    hint: ,
};

apiInstance.hintUpdate(body).then((data: Hint) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | **Hint**|  |


### Return type

[**Hint**](../models/Hint)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


