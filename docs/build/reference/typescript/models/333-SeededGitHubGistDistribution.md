
# SeededGitHubGistDistribution

This is the minimum information needed to distribute a Piece to a Gist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**recipients** | [**Recipients**](Recipients) |  | [optional] [default to undefined]
**_public** | **boolean** | we will default to true | [optional] [default to undefined]
**description** | **string** | This is the description of the Gist Distribution | [optional] [default to undefined]
**name** | **string** | This is the name of the gist you will add. | [default to undefined]

## Example

```typescript
import { SeededGitHubGistDistribution } from '';

// TODO: Update the object below with actual values
const example: SeededGitHubGistDistribution = {
    "schema": null, // 
    "recipients": null, // 
    "_public": null, // we will default to true
    "description": null, // This is the description of the Gist Distribution
    "name": null, // This is the name of the gist you will add.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededGitHubGistDistribution;
console.log(exampleParsed);
```




