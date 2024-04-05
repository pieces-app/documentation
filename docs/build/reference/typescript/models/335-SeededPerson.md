
# SeededPerson

This is a per-cursor to a full person.  Will throw an error, if asset is passed in but acces.scope is undefined.  can optionally pass in our mechanism here, as the default will be manual unless specified.  TODO consider updating these asset, format to referenced Models  Note: model, access, mechanism will only be added if the asset is passed in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**access** | [**PersonAccess**](PersonAccess) |  | [optional] [default to undefined]
**type** | [**PersonType**](PersonType) |  | [default to undefined]
**model** | [**PersonModel**](PersonModel) |  | [optional] [default to undefined]
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededPerson } from '';

// TODO: Update the object below with actual values
const example: SeededPerson = {
    "schema": null, // 
    "asset": null, // 
    "mechanism": null, // 
    "access": null, // 
    "type": null, // 
    "model": null, // 
    "annotations": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededPerson;
console.log(exampleParsed);
```




