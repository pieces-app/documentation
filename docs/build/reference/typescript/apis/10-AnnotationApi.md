# Annotation API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotationScoresIncrement**](AnnotationApi#annotationscoresincrement) | **POST** /annotation/\{annotation\}/scores/increment | \&#39;/annotation/\{annotation\}/scores/increment\&#39; [POST]
[**annotationSpecificAnnotationSnapshot**](AnnotationApi#annotationspecificannotationsnapshot) | **GET** /annotation/\{annotation\} | /annotation/\{annotation\} [GET]
[**annotationUpdate**](AnnotationApi#annotationupdate) | **POST** /annotation/update | /annotation/update [POST]


## **annotationScoresIncrement**
> annotationScoresIncrement()

This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AnnotationApi(configuration);

let body:.AnnotationApiAnnotationScoresIncrementRequest = {
    // string | This is a specific annotation uuid.
    annotation: annotation_example,
    // SeededScoreIncrement (optional)
    seededScoreIncrement: ,
};

apiInstance.annotationScoresIncrement(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededScoreIncrement** | **SeededScoreIncrement**|  |
 **annotation** | [**string**] | This is a specific annotation uuid. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **annotationSpecificAnnotationSnapshot**
> Annotation annotationSpecificAnnotationSnapshot()

This will get a snapshot of a specific annotation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AnnotationApi(configuration);

let body:.AnnotationApiAnnotationSpecificAnnotationSnapshotRequest = {
    // string | This is a specific annotation uuid.
    annotation: annotation_example,
};

apiInstance.annotationSpecificAnnotationSnapshot(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotation** | [**string**] | This is a specific annotation uuid. | defaults to undefined


### Return type

**Annotation**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **annotationUpdate**
> Annotation annotationUpdate()

This will update a specific annotation.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration({
    basePath: 'localhost:1000'
});
const apiInstance = new Pieces.AnnotationApi(configuration);

let body:.AnnotationApiAnnotationUpdateRequest = {
    // Annotation (optional)
    annotation: ,
};

apiInstance.annotationUpdate(body).then((data:any) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotation** | **Annotation**|  |


### Return type

**Annotation**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |




