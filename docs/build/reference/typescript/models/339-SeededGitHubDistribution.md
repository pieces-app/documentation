
# SeededGitHubDistribution Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**gist** | [**SeededGitHubGistDistribution**](SeededGitHubGistDistribution)

## Example Model

```typescript
import { SeededGitHubDistribution } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededGitHubDistribution = {
    "schema": null,
    "gist": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededGitHubDistribution
console.log(exampleParsed)
```


