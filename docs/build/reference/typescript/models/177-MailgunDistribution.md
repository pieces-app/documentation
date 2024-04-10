
# MailgunDistribution Model

This is a specific Distribution for mailgun specific information.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**recipients** | [**Recipients**](Recipients)

## Example Model

```typescript
import { MailgunDistribution } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: MailgunDistribution = {
    "schema": null,
    "recipients": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailgunDistribution
console.log(exampleParsed)
```


