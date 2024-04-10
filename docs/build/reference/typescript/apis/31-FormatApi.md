# Format API

All URIs are relative to *http://localhost:1000*

Method | HTTP request
------------- | -------------
[**formatAnalysis**](FormatApi#formatanalysis) | **GET** /format/\{format\}/analysis
[**formatReclassify**](FormatApi#formatreclassify) | **POST** /format/reclassify
[**formatSnapshot**](FormatApi#formatsnapshot) | **GET** /format/\{format\}
[**formatUpdateValue**](FormatApi#formatupdatevalue) | **POST** /format/update/value
[**formatUsageEvent**](FormatApi#formatusageevent) | **POST** /format/usage/event


## **formatAnalysis**
> Analysis formatAnalysis()

This will get an analysis from a format\'s id.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.FormatApi(configuration);

const body: Pieces.FormatAnalysisRequest = {
    // string | The id (uuid) for a specific format.
    format: 102ff265-fdfb-4142-8d94-4932d400199c,
};

apiInstance.formatAnalysis(body).then((data: Analysis) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **format** | [**string**] | The id (uuid) for a specific format. | defaults to undefined


### Return type

[**Analysis**](../models/Analysis)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **formatReclassify**
> Format formatReclassify()

This endpoint will be used to reclassify a single Format.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.FormatApi(configuration);

const body: Pieces.FormatReclassifyRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferable: true,
    // FormatReclassification (optional)
    formatReclassification: ,
};

apiInstance.formatReclassify(body).then((data: Format) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **formatReclassification** | **FormatReclassification**|  |
 **transferable** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Format**](../models/Format)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **formatSnapshot**
> Format formatSnapshot()

Get a snapshot of a specific format.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.FormatApi(configuration);

const body: Pieces.FormatSnapshotRequest = {
    // string | The id (uuid) for a specific format.
    format: 102ff265-fdfb-4142-8d94-4932d400199c,
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferable: true,
};

apiInstance.formatSnapshot(body).then((data: Format) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **format** | [**string**] | The id (uuid) for a specific format. | defaults to undefined
 **transferable** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Format**](../models/Format)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |

## **formatUpdateValue**
> Format formatUpdateValue()

This will update a format\'s value, ie, a formats fragment or file depending on what is provided.  code/text fragment behavior: If this format is an asset.preview.base we will update the asset.original\'s value. if this format is an asset.preview.original we will update the asset.preview.base\'s value.  code/text file behavior: If the the format that is update is the asset.preview.base is a fragment and the asset.original is file then we will update the asset.original\'s value to be bytes or string respectively. This goes the same for orignal to preview but will be go the reverse order so if the original is a file we will update the preview base\'s fragment string.  image fragment/file: We will not modify preview -> orignal or original -> preview here. so there are zero side effects in this case, and will update as normal. (this will be the case for all other value updates.)

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.FormatApi(configuration);

const body: Pieces.FormatUpdateValueRequest = {
    // boolean | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    transferable: true,
    // Format | This is the format that you want to update. (optional)
    format: ,
};

apiInstance.formatUpdateValue(body).then((data: Format) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **format** | **Format**| This is the format that you want to update. |
 **transferable** | [**boolean**] | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | (optional) defaults to undefined


### Return type

[**Format**](../models/Format)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK, you will get an updated format. |  -  |
**500** | Internal Server Error |  -  |

## **formatUsageEvent**
> TrackedFormatEvent formatUsageEvent()

This is an analytics endpoint that will enable us to know when a user has copied/downloaded/beamed/viewed a format.

### Example

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration();
const apiInstance = new Pieces.FormatApi(configuration);

const body: Pieces.FormatUsageEventRequest = {
    // SeededTrackedFormatEvent | This is a SeededTrackedFormatEvent, per tracked event:) (optional)
    seededTrackedFormatEvent: ,
};

apiInstance.formatUsageEvent(body).then((data: TrackedFormatEvent) => {
    console.log('API called successfully. Returned data: ' + data);
}).catch((error: unknown) => console.error(error));
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **seededTrackedFormatEvent** | **SeededTrackedFormatEvent**| This is a SeededTrackedFormatEvent, per tracked event:) |


### Return type

[**TrackedFormatEvent**](../models/TrackedFormatEvent)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


