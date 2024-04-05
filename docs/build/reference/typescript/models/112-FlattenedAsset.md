
# FlattenedAsset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedAsset prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. FlattenedFormat.preview is Type String, and FlattenedFormat.original is Type String

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | The globally available UID representing the asset in the Database, both locally and in the cloud. | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**creator** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**formats** | [**FlattenedFormats**](FlattenedFormats) |  | [default to undefined]
**preview** | [**FlattenedPreview**](FlattenedPreview) |  | [default to undefined]
**original** | **string** | An identifier of the format that is a reference to the original. | [default to undefined]
**shares** | [**FlattenedShares**](FlattenedShares) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [default to undefined]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] [default to undefined]
**interacted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**tags** | [**FlattenedTags**](FlattenedTags) |  | [optional] [default to undefined]
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives) |  | [optional] [default to undefined]
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] [default to undefined]
**curated** | **boolean** | This is an optional boolean that will flag that this asset came from a currated collection. | [optional] [default to undefined]
**discovered** | **boolean** |  | [optional] [default to undefined]
**activities** | [**FlattenedActivities**](FlattenedActivities) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**favorited** | **boolean** |  | [optional] [default to undefined]
**pseudo** | **boolean** |  | [optional] [default to undefined]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] [default to undefined]
**hints** | [**FlattenedHints**](FlattenedHints) |  | [optional] [default to undefined]
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] [default to undefined]
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] [default to undefined]
**demo** | **boolean** | This will let us know if this asset was generated as a \&#39;demo\&#39; snippet | [optional] [default to undefined]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedAsset } from '';

// TODO: Update the object below with actual values
const example: FlattenedAsset = {
    "schema": null, // 
    "id": 2254f2c8-5797-40e8-ac56-41166dc0e159, // The globally available UID representing the asset in the Database, both locally and in the cloud.
    "name": null, // 
    "creator": 497f6eca-6276-4993-bfeb-53cbbbba6f08, // 
    "created": null, // 
    "updated": null, // 
    "synced": null, // 
    "deleted": null, // 
    "formats": null, // 
    "preview": null, // 
    "original": 0872ccbf-1d8f-4f46-9028-469794d72761, // An identifier of the format that is a reference to the original.
    "shares": null, // 
    "mechanism": null, // 
    "websites": null, // 
    "interacted": null, // 
    "tags": null, // 
    "sensitives": null, // 
    "persons": null, // 
    "curated": null, // This is an optional boolean that will flag that this asset came from a currated collection.
    "discovered": null, // 
    "activities": null, // 
    "score": null, // 
    "favorited": null, // 
    "pseudo": null, // 
    "annotations": null, // 
    "hints": null, // 
    "anchors": null, // 
    "conversations": null, // 
    "demo": null, // This will let us know if this asset was generated as a \&#39;demo\&#39; snippet
    "summaries": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAsset;
console.log(exampleParsed);
```




