# WorkstreamEvents API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**workstreamEventsCreateNewWorkstreamEvent**](WorkstreamEventsApi#workstreameventscreatenewworkstreamevent) | **POST** /workstream_events/create
[**workstreamEventsDeleteSpecificWorkstreamEvent**](WorkstreamEventsApi#workstreameventsdeletespecificworkstreamevent) | **POST** /workstream_events/\{workstream_event\}/delete
[**workstreamEventsSnapshot**](WorkstreamEventsApi#workstreameventssnapshot) | **GET** /workstream_events


## **workstreamEventsCreateNewWorkstreamEvent**
> WorkstreamEvent workstreamEventsCreateNewWorkstreamEvent()

This will create a new WorkstreamEvent in the database.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WorkstreamEventsApi(configuration);

const body: Pieces.WorkstreamEventsCreateNewWorkstreamEventRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededWorkstreamEvent (optional)
    seededWorkstreamEvent: ,
};

apiInstance.workstreamEventsCreateNewWorkstreamEvent(body).then((data: WorkstreamEvent) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- | -------------
 **seededWorkstreamEvent** | **SeededWorkstreamEvent**|  |
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

## **workstreamEventsDeleteSpecificWorkstreamEvent**
> workstreamEventsDeleteSpecificWorkstreamEvent()

This will delete a specific workstream_event from the database!

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WorkstreamEventsApi(configuration);

const body: Pieces.WorkstreamEventsDeleteSpecificWorkstreamEventRequest = {
    // string | This is a identifier that is used to identify a specific workstream_event.
    workstreamEvent: workstreamEvent_example,
};

apiInstance.workstreamEventsDeleteSpecificWorkstreamEvent(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- | -------------
 **workstreamEvent** | [**string**] | This is a identifier that is used to identify a specific workstream_event. | defaults to undefined


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

## **workstreamEventsSnapshot**
> WorkstreamEvents workstreamEventsSnapshot()

This will get a snapshot of all your workstream events.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WorkstreamEventsApi(configuration);

const body: Pieces.WorkstreamEventsSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.workstreamEventsSnapshot(body).then((data: WorkstreamEvents) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**WorkstreamEvents**](../models/WorkstreamEvents)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |


