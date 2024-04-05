# Shares API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sharesCreateNewShare**](SharesApi#sharescreatenewshare) | **POST** /shares/create | /shares/create [POST]
[**sharesDeleteShare**](SharesApi#sharesdeleteshare) | **POST** /shares/\{share\}/delete | /shares/\{share\}/delete [POST]
[**sharesSnapshot**](SharesApi#sharessnapshot) | **GET** /shares | /shares [GET]
[**sharesSpecificShareSnapshot**](SharesApi#sharesspecificsharesnapshot) | **GET** /shares/\{share\} | /shares/\{share\} [GET]


## **sharesCreateNewShare**
> Shares sharesCreateNewShare()

This endpoint will accept an asset. Response here will be a Share that was created.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.SharesApi(configuration);

const body: Pieces.SharesCreateNewShareRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
    // SeededShare (optional)
    seededShare: ,
};

apiInstance.sharesCreateNewShare(body).then((data: Shares) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededShare** | **SeededShare**|  |
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Shares**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **sharesDeleteShare**
> string sharesDeleteShare()

This endpoint will just take a share id(as a url param) to delete out of the shares table, will return the share id that was deleted.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.SharesApi(configuration);

const body: Pieces.SharesDeleteShareRequest = {
    // string | Share id
    share: share_example,
};

apiInstance.sharesDeleteShare(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | [**string**] | Share id | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **sharesSnapshot**
> Shares sharesSnapshot()

This will return all of your shares. A Share is an asset that you as a user decided to share with another user via link.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.SharesApi(configuration);

const body: Pieces.SharesSnapshotRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.sharesSnapshot(body).then((data: Shares) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Shares**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **sharesSpecificShareSnapshot**
> Share sharesSpecificShareSnapshot()

This is an endpoint to enable a client to access a specific share through a provided share id.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.SharesApi(configuration);

const body: Pieces.SharesSpecificShareSnapshotRequest = {
    // string | Share id
    share: share_example,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferables: true,
};

apiInstance.sharesSpecificShareSnapshot(body).then((data: Share) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | [**string**] | Share id | defaults to undefined
 **transferables** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

**Share**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A specific share per the provided share id. |  -  |




