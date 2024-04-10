# Metrics Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**getMetricsFormats**](MetricsApi#getmetricsformats) | **GET** /metrics/formats
[**metricsFormatsOrdered**](MetricsApi#metricsformatsordered) | **GET** /metrics/formats/ordered


## **getMetricsFormats** {#getmetricsformats}
> FormatsMetrics getMetricsFormats()

This is going to get a snapshot of our FormatsMetrics

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.MetricsApi(configuration)

apiInstance.getMetricsFormats().then((data: FormatsMetrics) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**FormatsMetrics**](../models/FormatsMetrics)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **metricsFormatsOrdered** {#metricsformatsordered}
> OrderedMetrics metricsFormatsOrdered()

This will return a list of code formats in desc order from most to least formats uploaded.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.MetricsApi(configuration)

apiInstance.metricsFormatsOrdered().then((data: OrderedMetrics) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model
This endpoint does not need any parameters.


### Return Model type

[**OrderedMetrics**](../models/OrderedMetrics)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


