
# FlattenedTag

This is a Flattened Version of a Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**mechanisms** | [**\{ [key: string]: MechanismEnum; \}**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [default to undefined]
**relationship** | [**Relationship**](Relationship) |  | [optional] [default to undefined]
**interactions** | **number** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] [default to undefined]
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedTag } from '';

// TODO: Update the object below with actual values
const example: FlattenedTag = {
    "schema": null, // 
    "id": null, // 
    "text": null, // 
    "mechanisms": null, // This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id.
    "assets": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "category": null, // 
    "relationship": null, // 
    "interactions": null, // This is an optional value that will keep track of the number of times this has been interacted with.
    "persons": null, // 
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedTag;
console.log(exampleParsed);
```




