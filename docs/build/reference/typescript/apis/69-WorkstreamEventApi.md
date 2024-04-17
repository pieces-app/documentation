# WorkstreamEvent API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamEventAssociateWorkstreamSummary**](WorkstreamEventApi#workstreameventassociateworkstreamsummary) | **POST** /workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} | /workstream_event/\{workstream_event\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**workstreamEventDisassociateWorkstreamSummary**](WorkstreamEventApi#workstreameventdisassociateworkstreamsummary) | **POST** /workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} | /workstream_event/\{workstream_event\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**workstreamEventScoresIncrement**](WorkstreamEventApi#workstreameventscoresincrement) | **POST** /workstream_event/\{workstream_event\}/scores/increment | \'/workstream_event/\{workstream_event\}/scores/increment\' [POST]
[**workstreamEventUpdate**](WorkstreamEventApi#workstreameventupdate) | **POST** /workstream_event/update | /workstream_event/update [POST]
[**workstreamEventsSpecificWorkstreamEventSnapshot**](WorkstreamEventApi#workstreameventsspecificworkstreameventsnapshot) | **GET** /workstream_event/\{workstream_event\} | /workstream_event/\{workstream_event\} [GET]


## **workstreamEventAssociateWorkstreamSummary** {#workstreameventassociateworkstreamsummary}
> workstreamEventAssociateWorkstreamSummary()

This will associate a workstream_event with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventApi(configuration)

const body: Pieces.WorkstreamEventAssociateWorkstreamSummaryRequest = {
    // string | This is a identifier that is used to identify a specific workstream_event.
    workstreamEvent: workstreamEvent_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.workstreamEventAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


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

## **workstreamEventDisassociateWorkstreamSummary** {#workstreameventdisassociateworkstreamsummary}
> workstreamEventDisassociateWorkstreamSummary()

This will enable us to disassociate a workstream_event from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventApi(configuration)

const body: Pieces.WorkstreamEventDisassociateWorkstreamSummaryRequest = {
    // string | This is a identifier that is used to identify a specific workstream_event.
    workstreamEvent: workstreamEvent_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.workstreamEventDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


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

## **workstreamEventScoresIncrement** {#workstreameventscoresincrement}
> workstreamEventScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventApi(configuration)

const body: Pieces.WorkstreamEventScoresIncrementRequest = {
    // string | This is a identifier that is used to identify a specific workstream_event.
    workstreamEvent: workstreamEvent_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.workstreamEventScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined


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

## **workstreamEventUpdate** {#workstreameventupdate}
> WorkstreamEvent workstreamEventUpdate()

This will update a specific workstream_event.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventApi(configuration)

const body: Pieces.WorkstreamEventUpdateRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // WorkstreamEvent (optional)
    workstreamEvent: ,
};

apiInstance.workstreamEventUpdate(body).then((data: WorkstreamEvent) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | **WorkstreamEvent**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**WorkstreamEvent**](../models/WorkstreamEvent)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **workstreamEventsSpecificWorkstreamEventSnapshot** {#workstreameventsspecificworkstreameventsnapshot}
> WorkstreamEvent workstreamEventsSpecificWorkstreamEventSnapshot()

This will get a snapshot of a single workstream_event.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventApi(configuration)

const body: Pieces.WorkstreamEventsSpecificWorkstreamEventSnapshotRequest = {
    // string | This is a identifier that is used to identify a specific workstream_event.
    workstreamEvent: workstreamEvent_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.workstreamEventsSpecificWorkstreamEventSnapshot(body).then((data: WorkstreamEvent) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**WorkstreamEvent**](../models/WorkstreamEvent)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**410** | WorkstreamEvent not found. |  -  |


