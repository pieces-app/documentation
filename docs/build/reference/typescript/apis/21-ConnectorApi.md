# Connector Model API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**connect**](ConnectorApi#connect) | **POST** /connect
[**intention**](ConnectorApi#intention) | **POST** /\{application\}/intention
[**onboarded**](ConnectorApi#onboarded) | **POST** /\{application\}/onboarded
[**react**](ConnectorApi#react) | **POST** /\{application\}/reaction
[**suggest**](ConnectorApi#suggest) | **POST** /\{application\}/suggestion
[**track**](ConnectorApi#track) | **POST** /\{application\}/track


## **connect** {#connect}
> Context connect()

Abstracts a bootup/connection for a specific context.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConnectorApi(configuration)

const body: Pieces.ConnectRequest = {
    // SeededConnectorConnection |  (optional)
    seededConnectorConnection: ,
};

apiInstance.connect(body).then((data: Context) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorConnection** | **SeededConnectorConnection**|  |


### Return Model type

[**Context**](../models/Context)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |

## **intention** {#intention}
> string intention()

Allows you to send a SeededAsset for future comparison.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConnectorApi(configuration)

const body: Pieces.IntentionRequest = {
    // string
    application: application_example,
    // SeededConnectorAsset (optional)
    seededConnectorAsset: ,
};

apiInstance.intention(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorAsset** | **SeededConnectorAsset**|  |
 **application** | [**string**] |  | defaults to undefined


### Return Model type

**string**

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |
**500** | Internal Server Error:  |  -  |

## **onboarded** {#onboarded}
> string onboarded()

A central endpoint to manage updates to the onboarding process.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConnectorApi(configuration)

const body: Pieces.OnboardedRequest = {
    // string | This is a uuid that represents an application
    application: application_example,
    // boolean | Whether or not that application has been onboarded. (optional)
    body: true,
};

apiInstance.onboarded(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **boolean**| Whether or not that application has been onboarded. |
 **application** | [**string**] | This is a uuid that represents an application | defaults to undefined


### Return Model type

**string**

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK, This will just return a string of \&quot;OK\&quot;. |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |

## **react** {#react}
> string react()

This will respond to the output generated by the /suggest endpoint.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConnectorApi(configuration)

const body: Pieces.ReactRequest = {
    // string
    application: application_example,
    // Reaction | ** This body will need to be modified. (optional)
    reaction: ,
};

apiInstance.react(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reaction** | **Reaction**| ** This body will need to be modified. |
 **application** | [**string**] |  | defaults to undefined


### Return Model type

**string**

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | This string will either (1) be a string of the AssetUid or (2) will be a generic string of \&#39;OK\&#39; if the asset was not saved and \&#39;OK\&#39; if the result was just used to send information about the a suggested reuse. |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |

## **suggest** {#suggest}
> Suggestion suggest()

Invoked whenever a code snippet is copied from an integration. For instance, if a JetBrains user copies code, this endpoint can be called to assess whether to suggest reusing a piece (if reuse is true, the endpoint provides assets that the user may consider using), saving the code snippet, or taking no action.   **Note: This endpoint could potentially accept a SeededFormat for the request body if required.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConnectorApi(configuration)

const body: Pieces.SuggestRequest = {
    // string
    application: application_example,
    // SeededConnectorCreation | This is the Snippet that we will compare to all the saved assets to determine what we want to do with it! (optional)
    seededConnectorCreation: ,
};

apiInstance.suggest(body).then((data: Suggestion) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorCreation** | **SeededConnectorCreation**| This is the Snippet that we will compare to all the saved assets to determine what we want to do with it! |
 **application** | [**string**] |  | defaults to undefined


### Return Model type

[**Suggestion**](../models/Suggestion)

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |

## **track** {#track}
> string track()

Abstracts the process of packaging segments on a per-context basis.

### Example Model

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.ConnectorApi(configuration)

const body: Pieces.TrackRequest = {
    // string | This is a uuid that represents an application
    application: application_example,
    // SeededConnectorTracking | The body is able to take in several properties  (optional)
    seededConnectorTracking: ,
};

apiInstance.track(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters Model

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededConnectorTracking** | **SeededConnectorTracking**| The body is able to take in several properties  |
 **application** | [**string**] | This is a uuid that represents an application | defaults to undefined


### Return Model type

**string**

### HTTP Model request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP Model response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK, This will jsut return a string of \&quot;OK\&quot;. |  -  |
**400** | Bad Request, Application Failed to connect, Please ensure this is a valid integration. This happens in the case a developer provides and incorrect \{application\} (applicationId) within the route that doest match a preregisterd integration. |  -  |
**401** | Unauthorized, you will get this in the case that you are trying to ping Pieces_OS but havnt connected yet.\&quot;/connect was not called for your application.\&quot; |  -  |


