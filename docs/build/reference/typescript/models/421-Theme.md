
# Theme

This will describe the theme that belongs to a user.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**dark** | **boolean**

## Example

```typescript
import { Theme } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Theme = {
    "schema": null,
    "dark": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Theme
console.log(exampleParsed)
```


