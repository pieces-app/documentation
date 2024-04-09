
# GitHubGistDistribution

This is a published Github Gist.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**recipients** | [**Recipients**](Recipients)
**_public** | **boolean**
**description** | **string**
**name** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**githubId** | **string**
**url** | **string**

## Example

```typescript
import { GitHubGistDistribution } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: GitHubGistDistribution = {
    "schema": null,
    "recipients": null,
    "_public": null,
    "description": null,
    "name": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "githubId": null,
    "url": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GitHubGistDistribution;
console.log(exampleParsed);
```


