
# Asset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats.  Below formats, preview, and original CAN to be pollinated (DAG Unsafe) because it is a root node and it\'s child leaf nodes will prevent cycles agressively.

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
**formats** | [**Formats**](Formats) |  | [default to undefined]
**preview** | [**Preview**](Preview) |  | [default to undefined]
**original** | [**ReferencedFormat**](ReferencedFormat) |  | [default to undefined]
**shares** | [**Shares**](Shares) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [default to undefined]
**websites** | [**Websites**](Websites) |  | [optional] [default to undefined]
**interacted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**tags** | [**Tags**](Tags) |  | [optional] [default to undefined]
**sensitives** | [**Sensitives**](Sensitives) |  | [optional] [default to undefined]
**persons** | [**Persons**](Persons) |  | [optional] [default to undefined]
**curated** | **boolean** | This is an optional boolean that will flag that this asset came from a currated collection. | [optional] [default to undefined]
**discovered** | **boolean** |  | [optional] [default to undefined]
**activities** | [**Activities**](Activities) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**favorited** | **boolean** |  | [optional] [default to undefined]
**pseudo** | **boolean** | This will determine if this is a asset that the user did not explicitly save. | [optional] [default to undefined]
**annotations** | [**Annotations**](Annotations) |  | [optional] [default to undefined]
**hints** | [**Hints**](Hints) |  | [optional] [default to undefined]
**anchors** | [**Anchors**](Anchors) |  | [optional] [default to undefined]
**conversations** | [**Conversations**](Conversations) |  | [optional] [default to undefined]
**summaries** | [**WorkstreamSummaries**](WorkstreamSummaries) |  | [optional] [default to undefined]
**demo** | **boolean** | This will let us know if this asset was generated as a \&#39;demo\&#39; snippet | [optional] [default to undefined]

## Example

```typescript
import { Asset } from '';

// TODO: Update the object below with actual values
const example: Asset = {
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
    "original": null, // 
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
    "pseudo": null, // This will determine if this is a asset that the user did not explicitly save.
    "annotations": null, // 
    "hints": null, // 
    "anchors": null, // 
    "conversations": null, // 
    "summaries": null, // 
    "demo": null, // This will let us know if this asset was generated as a \&#39;demo\&#39; snippet
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Asset;
console.log(exampleParsed);
```




