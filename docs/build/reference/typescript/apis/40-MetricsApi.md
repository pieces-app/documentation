# Metrics API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**getMetricsFormats****](MetricsApi#getmetricsformats) | **GET** /metrics/formats
[**metricsFormatsOrdered****](MetricsApi#metricsformatsordered) | **GET** /metrics/formats/ordered


## **getMetricsFormats** {#getmetricsformats}
> FormatsMetrics getMetricsFormats()

This is going to get a snapshot of our FormatsMetrics

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.MetricsApi(configuration)

apiInstance.getMetricsFormats().then((data: FormatsMetrics) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters
This endpoint does not need any parameters.


### Return type

[**FormatsMetrics**](../models/FormatsMetrics)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **metricsFormatsOrdered** {#metricsformatsordered}
> OrderedMetrics metricsFormatsOrdered()

This will return a list of code formats in desc order from most to least formats uploaded.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.MetricsApi(configuration)

apiInstance.metricsFormatsOrdered().then((data: OrderedMetrics) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters
This endpoint does not need any parameters.


### Return type

[**OrderedMetrics**](../models/OrderedMetrics)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


