
# FlattenedWebsite

This is a specific model for related websites to an asset.[DAG SAFE]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | this is aspecific uuid that represents | [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**name** | **string** | A customizable name. | [default to undefined]
**url** | **string** | The true url or the website. | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**mechanisms** | [**\{ [key: string]: MechanismEnum; \}**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. | [optional] [default to undefined]
**interactions** | **number** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] [default to undefined]
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] [default to undefined]
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedWebsite } from '';

// TODO: Update the object below with actual values
const example: FlattenedWebsite = {
    "schema": null, // 
    "id": null, // this is aspecific uuid that represents
    "assets": null, // 
    "name": null, // A customizable name.
    "url": null, // The true url or the website.
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "mechanisms": null, // This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id.
    "interactions": null, // This is an optional value that will keep track of the number of times this has been interacted with.
    "persons": null, // 
    "conversations": null, // 
    "score": null, // 
    "summaries": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedWebsite;
console.log(exampleParsed);
```




