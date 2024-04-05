
# TrackedAssetEventMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reclassification** | [**TrackedAssetEventFormatReclassificationMetadata**](TrackedAssetEventFormatReclassificationMetadata) |  | [optional] [default to undefined]
**creation** | [**TrackedAssetEventCreationMetadata**](TrackedAssetEventCreationMetadata) |  | [optional] [default to undefined]
**rename** | [**TrackedAssetEventRenameMetadata**](TrackedAssetEventRenameMetadata) |  | [optional] [default to undefined]
**tag** | [**ReferencedTag**](ReferencedTag) |  | [optional] [default to undefined]
**website** | [**ReferencedWebsite**](ReferencedWebsite) |  | [optional] [default to undefined]
**person** | [**ReferencedPerson**](ReferencedPerson) |  | [optional] [default to undefined]
**sensitive** | [**ReferencedSensitive**](ReferencedSensitive) |  | [optional] [default to undefined]
**share** | [**ReferencedShare**](ReferencedShare) |  | [optional] [default to undefined]
**search** | [**TrackedAssetsEventSearchMetadata**](TrackedAssetsEventSearchMetadata) |  | [optional] [default to undefined]
**annotation** | [**ReferencedAnnotation**](ReferencedAnnotation) |  | [optional] [default to undefined]
**hint** | [**ReferencedHint**](ReferencedHint) |  | [optional] [default to undefined]
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetEventMetadata } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetEventMetadata = {
    "reclassification": null, // 
    "creation": null, // 
    "rename": null, // 
    "tag": null, // 
    "website": null, // 
    "person": null, // 
    "sensitive": null, // 
    "share": null, // 
    "search": null, // 
    "annotation": null, // 
    "hint": null, // 
    "anchor": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventMetadata;
console.log(exampleParsed);
```




