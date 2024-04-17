
# ReuseSuggestion

This is the ReuseSuggestion. Mainly creating an additional model here because I imagine that we will want to add some additional data to this in the future (potentially with more numerical data that is emitted from the ML Models)  **Note: suggested is required here because we will want to say if we suggested to take this action of reuse or not.  ** Thoughts here. We could potentially return Assets: which would be an iterable of assets in most relavent order for the user to reuse if they want.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**suggested** | **boolean**
**assets** | [**Assets**](Assets)

## Example

```typescript
import { ReuseSuggestion } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReuseSuggestion = {
    "schema": null,
    "suggested": null,
    "assets": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReuseSuggestion
console.log(exampleParsed)
```


