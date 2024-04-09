
# FlattenedTag

This is a Flattened Version of a Tag.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**text** | **string**
**mechanisms** | [**\{ [key: string]: MechanismEnum; \}**](MechanismEnum)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**category** | [**TagCategoryEnum**](TagCategoryEnum)
**relationship** | [**Relationship**](Relationship)
**interactions** | **number**
**persons** | [**FlattenedPersons**](FlattenedPersons)
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedTag } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FlattenedTag = {
    "schema": null,
    "id": null,
    "text": null,
    "mechanisms": null,
    "assets": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "category": null,
    "relationship": null,
    "interactions": null,
    "persons": null,
    "score": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedTag;
console.log(exampleParsed);
```


