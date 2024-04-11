# WorkstreamEvents Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamEventsCreateNewWorkstreamEvent**](WorkstreamEventsApi#workstreameventscreatenewworkstreamevent) | **POST** /workstream_events/create | /workstream_events/create [POST]
[**workstreamEventsDeleteSpecificWorkstreamEvent**](WorkstreamEventsApi#workstreameventsdeletespecificworkstreamevent) | **POST** /workstream_events/\{workstream_event\}/delete | /workstream_events/\{workstream_event\}/delete [POST]
[**workstreamEventsSnapshot**](WorkstreamEventsApi#workstreameventssnapshot) | **GET** /workstream_events | /workstream_events [GET]


## **workstreamEventsCreateNewWorkstreamEvent** {#workstreameventscreatenewworkstreamevent}
> WorkstreamEvent workstreamEventsCreateNewWorkstreamEvent()

This will create a new WorkstreamEvent in the database.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventsApi(configuration)

const body: Pieces.WorkstreamEventsCreateNewWorkstreamEventRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededWorkstreamEvent (optional)
    seededWorkstreamEvent: ,
};

apiInstance.workstreamEventsCreateNewWorkstreamEvent(body).then((data: WorkstreamEvent) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededWorkstreamEvent** | **SeededWorkstreamEvent**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**WorkstreamEvent**](../models/WorkstreamEvent)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **workstreamEventsDeleteSpecificWorkstreamEvent** {#workstreameventsdeletespecificworkstreamevent}
> workstreamEventsDeleteSpecificWorkstreamEvent()

This will delete a specific workstream_event from the database!

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventsApi(configuration)

const body: Pieces.WorkstreamEventsDeleteSpecificWorkstreamEventRequest = {
    // string | This is a identifier that is used to identify a specific workstream_event.
    workstreamEvent: workstreamEvent_example,
};

apiInstance.workstreamEventsDeleteSpecificWorkstreamEvent(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined


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

## **workstreamEventsSnapshot** {#workstreameventssnapshot}
> WorkstreamEvents workstreamEventsSnapshot()

This will get a snapshot of all your workstream events.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.WorkstreamEventsApi(configuration)

const body: Pieces.WorkstreamEventsSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.workstreamEventsSnapshot(body).then((data: WorkstreamEvents) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return Model type

[**WorkstreamEvents**](../models/WorkstreamEvents)

### HTTP Model request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


