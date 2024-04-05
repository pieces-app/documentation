
# SeededGitHubDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**gist** | [**SeededGitHubGistDistribution**](SeededGitHubGistDistribution) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededGitHubDistribution } from '';

// TODO: Update the object below with actual values
const example: SeededGitHubDistribution = {
    "schema": null, // 
    "gist": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededGitHubDistribution;
console.log(exampleParsed);
```




