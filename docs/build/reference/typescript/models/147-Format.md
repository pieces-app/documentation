
# Format

A representation of Data for a particular Form Factor of an Asset.  Below asset HAS to be Flattened because it is a leaf node and must prevent cycles agressively.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**creator** | **string**
**classification** | [**Classification**](Classification)
**icon** | **string**
**role** | [**Role**](Role)
**application** | [**Application**](Application)
**asset** | [**FlattenedAsset**](FlattenedAsset)
**bytes** | [**ByteDescriptor**](ByteDescriptor)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**synced** | [**GroupedTimestamp**](GroupedTimestamp)
**cloud** | **string**
**fragment** | [**FragmentFormat**](FragmentFormat)
**file** | [**FileFormat**](FileFormat)
**analysis** | [**Analysis**](Analysis)
**relationship** | [**Relationship**](Relationship)
**activities** | [**Activities**](Activities)

## Example

```typescript
import { Format } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Format = {
    "schema": null,
    "id": 102ff265-fdfb-4142-8d94-4932d400199c,
    "creator": 497f6eca-6276-4993-bfeb-53cbbbba6f08,
    "classification": null,
    "icon": null,
    "role": null,
    "application": null,
    "asset": null,
    "bytes": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "synced": null,
    "cloud": null,
    "fragment": null,
    "file": null,
    "analysis": null,
    "relationship": null,
    "activities": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Format;
console.log(exampleParsed);
```


