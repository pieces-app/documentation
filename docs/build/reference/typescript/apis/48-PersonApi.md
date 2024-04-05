# Person API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personAssociateWorkstreamSummary**](PersonApi#personassociateworkstreamsummary) | **POST** /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/associate/\{workstream_summary\} [POST]
[**personDisassociateWorkstreamSummary**](PersonApi#persondisassociateworkstreamsummary) | **POST** /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} | /person/\{person\}/workstream_summaries/disassociate/\{workstream_summary\} [POST]
[**personScoresIncrement**](PersonApi#personscoresincrement) | **POST** /person/\{person\}/scores/increment | \&#39;/person/\{person\}/scores/increment\&#39; [POST]
[**personSnapshot**](PersonApi#personsnapshot) | **GET** /person/\{person\} | /person/\{person\} [GET]
[**updatePerson**](PersonApi#updateperson) | **POST** /person/update | /person/update [POST]


## **personAssociateWorkstreamSummary** Deprecated: 
> personAssociateWorkstreamSummary()

This will associate a person with a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonApi(configuration);

const body: Pieces.PersonAssociateWorkstreamSummaryRequest = {
    // string | This is a uuid that represents a person.
    person: person_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.personAssociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined
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



## **personDisassociateWorkstreamSummary** Deprecated: 
> personDisassociateWorkstreamSummary()

This will enable us to disassociate an person from a workstream summary. This will do the same thing as the workstreamSummary equivalent.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonApi(configuration);

const body: Pieces.PersonDisassociateWorkstreamSummaryRequest = {
    // string | This is a uuid that represents a person.
    person: person_example,
    // string | This is a identifier that is used to identify a specific workstream_summary.
    workstreamSummary: workstreamSummary_example,
};

apiInstance.personDisassociateWorkstreamSummary(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined
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



## **personScoresIncrement** Deprecated: 
> personScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonApi(configuration);

const body: Pieces.PersonScoresIncrementRequest = {
    // string | This is a uuid that represents a person.
    person: person_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.personScoresIncrement(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **personSnapshot** Deprecated: 
> Person personSnapshot()

This will get a snapshot of a specific person

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonApi(configuration);

const body: Pieces.PersonSnapshotRequest = {
    // string | This is a uuid that represents a person.
    person: person_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.personSnapshot(body).then((data: Person) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Person**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **updatePerson** Deprecated: 
> Person updatePerson()

This will update a specific person

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonApi(configuration);

const body: Pieces.UpdatePersonRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // Person (optional)
    person: ,
};

apiInstance.updatePerson(body).then((data: Person) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **Person**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Person**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |




