# Sensitives API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**sensitivesCreateNewSensitive**](SensitivesApi#sensitivescreatenewsensitive) | **POST** /sensitives/create
[**sensitivesDeleteSensitive**](SensitivesApi#sensitivesdeletesensitive) | **POST** /sensitives/\{sensitive\}/delete
[**sensitivesSnapshot**](SensitivesApi#sensitivessnapshot) | **GET** /sensitives


## **sensitivesCreateNewSensitive**
> Sensitive sensitivesCreateNewSensitive()

This will create a new sensitive model.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.SensitivesApi(configuration);

const body: Pieces.SensitivesCreateNewSensitiveRequest = {
    // SeededSensitive (optional)
    seededSensitive: ,
};

apiInstance.sensitivesCreateNewSensitive(body).then((data: Sensitive) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededSensitive** | **SeededSensitive**|  |


### Return type

[**Sensitive**](../models/Sensitive)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **sensitivesDeleteSensitive**
> sensitivesDeleteSensitive()

This will delete a sensitive based on the sensitive uuid.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.SensitivesApi(configuration);

const body: Pieces.SensitivesDeleteSensitiveRequest = {
    // string | This is a uuid that represents a sensitive.
    sensitive: sensitive_example,
};

apiInstance.sensitivesDeleteSensitive(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **sensitive** | [**string**] | This is a uuid that represents a sensitive. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**204** | No Content |  -  |
**500** |  |  -  |

## **sensitivesSnapshot**
> Sensitives sensitivesSnapshot()

This will get a snapshot of all of the sensitives.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.SensitivesApi(configuration);

apiInstance.sensitivesSnapshot().then((data: Sensitives) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Sensitives**](../models/Sensitives)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


