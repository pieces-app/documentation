
# GitHubDistribution


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**gist** | [**GitHubGistDistribution**](GitHubGistDistribution)

## Example

```typescript
import { GitHubDistribution } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: GitHubDistribution = {
    "schema": null,
    "gist": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GitHubDistribution;
console.log(exampleParsed);
```


