
# SeededDistribution Model

TODO if we add another distribution add to this, Distribution, and flattenedDistribution.  can only use this Model with our Linkify Model.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**mailgun** | [**MailgunDistribution**](MailgunDistribution)
**github** | [**SeededGitHubDistribution**](SeededGitHubDistribution)

## Example Model

```typescript
import { SeededDistribution } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededDistribution = {
    "schema": null,
    "mailgun": null,
    "github": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDistribution
console.log(exampleParsed)
```


