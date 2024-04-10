# Hints API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**hintsCreateNewHint**](HintsApi#hintscreatenewhint) | **POST** /hints/create
[**hintsDeleteSpecificHint**](HintsApi#hintsdeletespecifichint) | **POST** /hints/\{hint\}/delete
[**hintsSnapshot**](HintsApi#hintssnapshot) | **GET** /hints


## **hintsCreateNewHint**
> Hint hintsCreateNewHint()

This will create a hint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.HintsApi(configuration);

const body: Pieces.HintsCreateNewHintRequest = {
    // SeededHint (optional)
    seededHint: ,
};

apiInstance.hintsCreateNewHint(body).then((data: Hint) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededHint** | **SeededHint**|  |


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

## **hintsDeleteSpecificHint**
> hintsDeleteSpecificHint()

This will delete a specific hint.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.HintsApi(configuration);

const body: Pieces.HintsDeleteSpecificHintRequest = {
    // string | This is a specific hint uuid
    hint: hint_example,
};

apiInstance.hintsDeleteSpecificHint(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **hintsSnapshot**
> Hints hintsSnapshot()

This will get a snapshot of all of the hints.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.HintsApi(configuration);

apiInstance.hintsSnapshot().then((data: Hints) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Hints**](../models/Hints)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


