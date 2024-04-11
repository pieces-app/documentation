
# PersonAccess Model

if scoped is provided will let us know what level of permission(access) this specific person has in relation to what scope.(collection, asset,...etc)  in the future will expand to global (with its own enumeration for a global entire project/cloud scope)

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**scoped** | [**PersonAccessScopedEnum**](PersonAccessScopedEnum)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)

## Example Model

```typescript
import { PersonAccess } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: PersonAccess = {
    "schema": null,
    "scoped": null,
    "deleted": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonAccess
console.log(exampleParsed)
```


