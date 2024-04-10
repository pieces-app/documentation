
# FlattenedDistribution Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**share** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mailgun** | [**MailgunDistribution**](MailgunDistribution)
**github** | [**GitHubDistribution**](GitHubDistribution)

## Example Model

```typescript
import { FlattenedDistribution } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedDistribution = {
    "schema": null,
    "id": null,
    "share": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "mailgun": null,
    "github": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedDistribution
console.log(exampleParsed)
```


