# WorkstreamSummaries API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workstreamSummariesCreateNewWorkstreamSummary**](WorkstreamSummariesApi#workstreamsummariescreatenewworkstreamsummary) | **POST** /workstream_summaries/create | /workstream_summaries/create [POST]
[**workstreamSummariesDeleteSpecificWorkstreamSummary**](WorkstreamSummariesApi#workstreamsummariesdeletespecificworkstreamsummary) | **POST** /workstream_summaries/\{workstream_summary\}/delete | /workstream_summaries/\{workstream_summary\}/delete [POST]
[**workstreamSummariesSnapshot**](WorkstreamSummariesApi#workstreamsummariessnapshot) | **GET** /workstream_summaries | /workstream_summaries [GET]


## **workstreamSummariesCreateNewWorkstreamSummary** Deprecated: 
> WorkstreamSummary workstreamSummariesCreateNewWorkstreamSummary()

This will create a new WorkstreamSummary in the database.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WorkstreamSummariesApi(configuration);

const body: Pieces.WorkstreamSummariesCreateNewWorkstreamSummaryRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededWorkstreamSummary (optional)
    seededWorkstreamSummary: ,
};

apiInstance.workstreamSummariesCreateNewWorkstreamSummary(body).then((data: WorkstreamSummary) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededWorkstreamSummary** | **SeededWorkstreamSummary**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**WorkstreamSummary**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **workstreamSummariesDeleteSpecificWorkstreamSummary** Deprecated: 
> workstreamSummariesDeleteSpecificWorkstreamSummary()

This will delete a specific workstream_summary from the database!

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WorkstreamSummariesApi(configuration);

const body: Pieces.WorkstreamSummariesDeleteSpecificWorkstreamSummaryRequest = {
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.workstreamSummariesDeleteSpecificWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstreamSummary** | [**string**] | This is a identifier that is used to identify a specific workstream_summary. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **workstreamSummariesSnapshot** Deprecated: 
> WorkstreamSummaries workstreamSummariesSnapshot()

This will get a snapshot of all your workstream summaries.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.WorkstreamSummariesApi(configuration);

const body: Pieces.WorkstreamSummariesSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.workstreamSummariesSnapshot(body).then((data: WorkstreamSummaries) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**WorkstreamSummaries**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |




