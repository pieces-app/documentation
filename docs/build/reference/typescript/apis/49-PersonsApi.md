# Persons API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personDisassociateAsset**](PersonsApi#persondisassociateasset) | **POST** /persons/\{person\}/assets/delete/\{asset\} | /persons/\{person\}/assets/delete/\{asset\} [POST]
[**personsCreateNewPerson**](PersonsApi#personscreatenewperson) | **POST** /persons/create | /persons/create [POST]
[**personsDeletePerson**](PersonsApi#personsdeleteperson) | **POST** /persons/\{person\}/delete | /persons/\{person\}/delete [POST]
[**personsSnapshot**](PersonsApi#personssnapshot) | **GET** /persons | /persons [GET]


## **personDisassociateAsset**
> personDisassociateAsset()

This will update both the asset and the person reference, that will remove a person from an asset(only the references).  This will NOT remove the person. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonsApi(configuration);

const body: Pieces.PersonDisassociateAssetRequest = {
    // string | This is a uuid that represents a person.
    person: person_example,
    // string | The id (uuid) of the asset that you are trying to access.
    asset: 2254f2c8-5797-40e8-ac56-41166dc0e159,
};

apiInstance.personDisassociateAsset(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined
 **asset** | [**string**] | The id (uuid) of the asset that you are trying to access. | defaults to undefined


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



## **personsCreateNewPerson**
> Person personsCreateNewPerson()

This will create a new person.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonsApi(configuration);

const body: Pieces.PersonsCreateNewPersonRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededPerson (optional)
    seededPerson: ,
};

apiInstance.personsCreateNewPerson(body).then((data: Person) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededPerson** | **SeededPerson**|  |
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
**500** | Internal Server Error |  -  |



## **personsDeletePerson**
> personsDeletePerson()

This will delete a specific person.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonsApi(configuration);

const body: Pieces.PersonsDeletePersonRequest = {
    // string | This is a uuid that represents a person.
    person: person_example,
};

apiInstance.personsDeletePerson(body).then((data: void (empty response body)) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | [**string**] | This is a uuid that represents a person. | defaults to undefined


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



## **personsSnapshot**
> Persons personsSnapshot()

This will get a snapshot of all of your people

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.PersonsApi(configuration);

const body: Pieces.PersonsSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.personsSnapshot(body).then((data: Persons) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Persons**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |




