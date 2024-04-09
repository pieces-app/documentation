
# SeededGitHubGistDistribution

This is the minimum information needed to distribute a Piece to a Gist.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**recipients** | [**Recipients**](Recipients)
**_public** | **boolean**
**description** | **string**
**name** | **string**

## Example

```typescript
import { SeededGitHubGistDistribution } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededGitHubGistDistribution = {
    "schema": null,
    "recipients": null,
    "_public": null,
    "description": null,
    "name": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededGitHubGistDistribution;
console.log(exampleParsed);
```


