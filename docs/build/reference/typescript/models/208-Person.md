
# Person

if expiration is add then, after the alloted expiration date the user will only have view && comment only permissions. Only present in the case there is a scope such as a defined collection/asset...  if asset is passed then that means this person belongs to a scoped asset.  NOTE****: annotations here are annotations to describe the person!!! if in the future we want to add who wrote an annotation on and asset or soemthing like that, we will want to add a new field on here called authorships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**type** | [**PersonType**](PersonType) |  | [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**mechanisms** | [**\{ [key: string]: MechanismEnum; \}**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. | [optional] [default to undefined]
**interactions** | **number** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] [default to undefined]
**access** | [**\{ [key: string]: PersonAccess; \}**](PersonAccess) | This is a Map&lt;String, PersonAccess&gt; where the the key is an asset id. | [optional] [default to undefined]
**tags** | [**FlattenedTags**](FlattenedTags) |  | [optional] [default to undefined]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] [default to undefined]
**models** | [**\{ [key: string]: PersonModel; \}**](PersonModel) | This is a Map&lt;String, PersonModel&gt;, where the the key is an asset id. | [optional] [default to undefined]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] [default to undefined]

## Example

```typescript
import { Person } from '';

// TODO: Update the object below with actual values
const example: Person = {
    "schema": null, // 
    "id": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "type": null, // 
    "assets": null, // 
    "mechanisms": null, // This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id.
    "interactions": null, // This is an optional value that will keep track of the number of times this has been interacted with.
    "access": null, // This is a Map&lt;String, PersonAccess&gt; where the the key is an asset id.
    "tags": null, // 
    "websites": null, // 
    "models": null, // This is a Map&lt;String, PersonModel&gt;, where the the key is an asset id.
    "annotations": null, // 
    "score": null, // 
    "summaries": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Person;
console.log(exampleParsed);
```




