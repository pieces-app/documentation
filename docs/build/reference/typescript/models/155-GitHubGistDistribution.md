
# GitHubGistDistribution

This is a published Github Gist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**recipients** | [**Recipients**](Recipients) |  | [default to undefined]
**_public** | **boolean** | This will let us know if the gist is public or private. | [default to undefined]
**description** | **string** | This is the description of the Gist Distribution | [optional] [default to undefined]
**name** | **string** | This is the name of the gist you will add. | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**githubId** | **string** | This is the id that github uses to represent the gist. | [default to undefined]
**url** | **string** | This is the url where the gist is. | [default to undefined]

## Example

```typescript
import { GitHubGistDistribution } from '';

// TODO: Update the object below with actual values
const example: GitHubGistDistribution = {
    "schema": null, // 
    "recipients": null, // 
    "_public": null, // This will let us know if the gist is public or private.
    "description": null, // This is the description of the Gist Distribution
    "name": null, // This is the name of the gist you will add.
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "githubId": null, // This is the id that github uses to represent the gist.
    "url": null, // This is the url where the gist is.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GitHubGistDistribution;
console.log(exampleParsed);
```




