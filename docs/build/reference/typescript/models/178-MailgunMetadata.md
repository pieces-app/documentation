
# MailgunMetadata

TODO add additional properties. TODO eventually modify this model to look like the response from Mailgun.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**messageId** | **string**

## Example

```typescript
import { MailgunMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: MailgunMetadata = {
    "schema": null,
    "messageId": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailgunMetadata
console.log(exampleParsed)
```


