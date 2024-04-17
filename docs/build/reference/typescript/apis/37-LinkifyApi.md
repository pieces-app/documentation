---
title: Linkify API | TypeScript SDK
---

# Linkify API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkify**](Linkify API#linkify) | **POST** /linkify | /linkify [POST]
[**linkifyMultiple**](Linkify API#linkifymultiple) | **POST** /linkify/multiple | /linkify/multiple [POST]
[**linkifyShareRevoke**](Linkify API#linkifysharerevoke) | **POST** /linkify/\{share\}/revoke | [POST} /linkify/\{share\}/revoke


## **linkify** {#linkify}
> Shares linkify()



### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.Linkify API(configuration)

const body: Pieces.LinkifyRequest = {
    // Linkify (optional)
    linkify: ,
};

apiInstance.linkify(body).then((data: Shares) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkify** | **Linkify**|  |


### Return type

[**Shares**](../models/Shares)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**412** | This means that Github Account has not been connected to this user yet. |  -  |
**413** | Request Entity Too Large |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **linkifyMultiple** {#linkifymultiple}
> Shares linkifyMultiple()

- assumption that you have already backed up the asset\'s that you are sending to this endpoint.(b/c the assets are ids.)

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.Linkify API(configuration)

const body: Pieces.LinkifyMultipleRequest = {
    // LinkifyMultiple |  (optional)
    linkifyMultiple: ,
};

apiInstance.linkifyMultiple(body).then((data: Shares) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkifyMultiple** | **LinkifyMultiple**|  |


### Return type

[**Shares**](../models/Shares)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**409** | If a name is passed in as an optional property, and the name is already take we will not be able to assign the name. |  -  |
**413** | Request Entity Too Large |  -  |
**417** | Expectation Failed, if this status is return that means that you did not fully upload all your assets that you are attempting to add to a collection. |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

## **linkifyShareRevoke** {#linkifysharerevoke}
> string linkifyShareRevoke()

This will revoke a link.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.Linkify API(configuration)

const body: Pieces.LinkifyShareRevokeRequest = {
    // string
    share: share_example,
};

apiInstance.linkifyShareRevoke(body).then((data: string) => {
    console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | [**string**] |  | defaults to undefined


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK, this is the uuid of the share that was revoked. |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot revoke a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |


