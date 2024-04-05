
# PersonAccess

if scoped is provided will let us know what level of permission(access) this specific person has in relation to what scope.(collection, asset,...etc)  in the future will expand to global (with its own enumeration for a global entire project/cloud scope)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**scoped** | [**PersonAccessScopedEnum**](PersonAccessScopedEnum) |  | [optional] [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]

## Example

```typescript
import { PersonAccess } from '';

// TODO: Update the object below with actual values
const example: PersonAccess = {
    "schema": null, // 
    "scoped": null, // 
    "deleted": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonAccess;
console.log(exampleParsed);
```




