# Linkify API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkify**](LinkifyApi#linkify) | **POST** /linkify | /linkify [POST]
[**linkifyMultiple**](LinkifyApi#linkifymultiple) | **POST** /linkify/multiple | /linkify/multiple [POST]
[**linkifyShareRevoke**](LinkifyApi#linkifysharerevoke) | **POST** /linkify/\{share\}/revoke | [POST} /linkify/\{share\}/revoke


## **linkify**
> Shares linkify()



### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.LinkifyApi(configuration);

let body:.LinkifyApiLinkifyRequest = {
    // Linkify (optional)
    linkify: ,
};

apiInstance.linkify(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkify** | **Linkify**|  |


### Return type

**Shares**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**412** | This means that Github Account has not been connected to this user yet. |  -  |
**413** | Request Entity Too Large |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **linkifyMultiple**
> Shares linkifyMultiple()

- assumption that you have already backed up the asset\'s that you are sending to this endpoint.(b/c the assets are ids.)

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.LinkifyApi(configuration);

let body:.LinkifyApiLinkifyMultipleRequest = {
    // LinkifyMultiple |  (optional)
    linkifyMultiple: ,
};

apiInstance.linkifyMultiple(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkifyMultiple** | **LinkifyMultiple**|  |


### Return type

**Shares**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**409** | If a name is passed in as an optional property, and the name is already take we will not be able to assign the name. |  -  |
**413** | Request Entity Too Large |  -  |
**417** | Expectation Failed, if this status is return that means that you did not fully upload all your assets that you are attempting to add to a collection. |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot create a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)

## **linkifyShareRevoke**
> string linkifyShareRevoke()

This will revoke a link.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.LinkifyApi(configuration);

let body:.LinkifyApiLinkifyShareRevokeRequest = {
    // string
    share: share_example,
};

apiInstance.linkifyShareRevoke(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, this is the uuid of the share that was revoked. |  -  |
**505** | HTTP Version Not Supported, This means that your user need to update their local os, and they cannot revoke a shareable link. |  -  |
**511** | Network Authentication Required, This means that you user needs to be authenticated with OS inorder to create shareable links. The User also need to be connected to their cloud to create shareable links.(If either of the 2 are not connected we will return a 511)  TODO thinking about returning a more comprehensive value for digestion on the recieving side. |  -  |

[[Back to top]](#) [[Back to API list]](README#documentation-for-api-endpoints) [[Back to Model list]](README#documentation-for-models) [[Back to README]](README)


