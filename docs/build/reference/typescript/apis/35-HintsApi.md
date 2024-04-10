# Hints Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**hintsCreateNewHint**](HintsApi#hintscreatenewhint) | **POST** /hints/create
[**hintsDeleteSpecificHint**](HintsApi#hintsdeletespecifichint) | **POST** /hints/\{hint\}/delete
[**hintsSnapshot**](HintsApi#hintssnapshot) | **GET** /hints


## **hintsCreateNewHint** {#hintscreatenewhint}
> Hint hintsCreateNewHint()

This will create a hint.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintsApi(configuration)

const body: Pieces.HintsCreateNewHintRequest = {
    // SeededHint (optional)
    seededHint: ,
};

apiInstance.hintsCreateNewHint(body).then((data: Hint) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededHint** | **SeededHint**|  |


### Return Model type

[**Hint**](../models/Hint)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **hintsDeleteSpecificHint** {#hintsdeletespecifichint}
> hintsDeleteSpecificHint()

This will delete a specific hint.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintsApi(configuration)

const body: Pieces.HintsDeleteSpecificHintRequest = {
    // string | This is a specific hint uuid
    hint: hint_example,
};

apiInstance.hintsDeleteSpecificHint(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hint** | [**string**] | This is a specific hint uuid | defaults to undefined


### Return Model type

void (empty response body)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **hintsSnapshot** {#hintssnapshot}
> Hints hintsSnapshot()

This will get a snapshot of all of the hints.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.HintsApi(configuration)

apiInstance.hintsSnapshot().then((data: Hints) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**Hints**](../models/Hints)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


