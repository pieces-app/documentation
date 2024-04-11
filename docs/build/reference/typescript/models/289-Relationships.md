
# Relationships Model


## Properties Model

Name | Type
------------ | -------------
**iterable** | [**Array&lt;Relationship&gt;**](Relationship)

## Example Model

```typescript
import { Relationships } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Relationships = {
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Relationships
console.log(exampleParsed)
```


