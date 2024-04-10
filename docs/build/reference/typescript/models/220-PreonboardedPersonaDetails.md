
# PreonboardedPersonaDetails

This is an input body for the /machine_learning/text/technical_processing/generators/personification endpoint.  This will accept some of the personal details ie languages/personas && will transform this in to onbaording snippets

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**languages** | **Array&lt;string&gt;**
**personas** | **Array&lt;string&gt;**

## Example

```typescript
import { PreonboardedPersonaDetails } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: PreonboardedPersonaDetails = {
    "schema": null,
    "languages": null,
    "personas": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PreonboardedPersonaDetails
console.log(exampleParsed)
```


