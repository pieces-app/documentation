# Connector API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connect**](ConnectorApi#connect) | **POST** /connect | /connect [POST]
[**intention**](ConnectorApi#intention) | **POST** /\{application\}/intention | /\{application\}/intention [POST]
[**onboarded**](ConnectorApi#onboarded) | **POST** /\{application\}/onboarded | /onboarded [POST]
[**react**](ConnectorApi#react) | **POST** /\{application\}/reaction | /\{application\}/reaction [POST]
[**suggest**](ConnectorApi#suggest) | **POST** /\{application\}/suggestion | /\{application\}/suggestion [POST]
[**track**](ConnectorApi#track) | **POST** /\{application\}/track | /\{application\}/track [POST]


## **connect** Deprecated: 
> Context connect()

An endpoint which abstracts a bootup/connection for a specific context

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConnectorApi(configuration);

const body: Pieces.ConnectRequest = {
    // SeededConnectorConnection |  (optional)
    seededConnectorConnection: ,
};

apiInstance.connect(body).then((data: Context) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorConnection** | **SeededConnectorConnection**|  |


### Return type

**Context**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |



## **intention** Deprecated: 
> string intention()

This can be used to send a SeededAsset over that you may use to compair in the future.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConnectorApi(configuration);

const body: Pieces.IntentionRequest = {
    // string
    application: application_example,
    // SeededConnectorAsset (optional)
    seededConnectorAsset: ,
};

apiInstance.intention(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorAsset** | **SeededConnectorAsset**|  |
 **application** | [**string**] |  | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |
**500** | Internal Server Error:  |  -  |



## **onboarded** Deprecated: 
> string onboarded()

A consolidation endpoint to handle the updating of an onboarding process.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConnectorApi(configuration);

const body: Pieces.OnboardedRequest = {
    // string | This is a uuid that represents an application
    application: application_example,
    // boolean | Whether or not that application has been onboarded. (optional)
    body: true,
};

apiInstance.onboarded(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **boolean**| Whether or not that application has been onboarded. |
 **application** | [**string**] | This is a uuid that represents an application | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, This will jsut return a string of \&quot;OK\&quot;. |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |



## **react** Deprecated: 
> string react()

This will react to the response returned from the /suggest endpoint. 

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConnectorApi(configuration);

const body: Pieces.ReactRequest = {
    // string
    application: application_example,
    // Reaction | ** This body will need to be modified. (optional)
    reaction: ,
};

apiInstance.react(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reaction** | **Reaction**| ** This body will need to be modified. |
 **application** | [**string**] |  | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This string will either (1) be a string of the AssetUid or (2) will be a generic string of \&#39;OK\&#39; if the asset was not saved and \&#39;OK\&#39; if the result was just used to send information about the a suggested reuse. |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |



## **suggest** Deprecated: 
> Suggestion suggest()

This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConnectorApi(configuration);

const body: Pieces.SuggestRequest = {
    // string
    application: application_example,
    // SeededConnectorCreation | This is the Snippet that we will compare to all the saved assets to determine what we want to do with it! (optional)
    seededConnectorCreation: ,
};

apiInstance.suggest(body).then((data: Suggestion) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorCreation** | **SeededConnectorCreation**| This is the Snippet that we will compare to all the saved assets to determine what we want to do with it! |
 **application** | [**string**] |  | defaults to undefined


### Return type

**Suggestion**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |



## **track** Deprecated: 
> string track()

This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis

### Example

```typescript
import * as Pieces from @pieces.app/pieces-os-client

// TODO: Write logic for os here
const configuration = Pieces.Configuration();
const apiInstance = new Pieces.ConnectorApi(configuration);

const body: Pieces.TrackRequest = {
    // string | This is a uuid that represents an application
    application: application_example,
    // SeededConnectorTracking | The body is able to take in several properties  (optional)
    seededConnectorTracking: ,
};

apiInstance.track(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorTracking** | **SeededConnectorTracking**| The body is able to take in several properties  |
 **application** | [**string**] | This is a uuid that represents an application | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, This will jsut return a string of \&quot;OK\&quot;. |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |




