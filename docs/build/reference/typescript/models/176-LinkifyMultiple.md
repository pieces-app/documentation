
# LinkifyMultiple

This is the incoming linkify model.  if access is PRIVATE then please provide and array of users to enable the link for.  Assumption, all assets are already backed up to the cloud. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**assets** | **Array&lt;string&gt;** | This is an array or string that represents an already backed up asset. That will be added to a collection. | [default to undefined]
**users** | [**Array&lt;SeededUser&gt;**](SeededUser) | this is an array of users. | [optional] [default to undefined]
**access** | [**AccessEnum**](AccessEnum) |  | [default to undefined]
**name** | **string** | optionally can give the collection a name if you want. | [optional] [default to undefined]

## Example

```typescript
import { LinkifyMultiple } from '';

// TODO: Update the object below with actual values
const example: LinkifyMultiple = {
    "schema": null, // 
    "assets": null, // This is an array or string that represents an already backed up asset. That will be added to a collection.
    "users": null, // this is an array of users.
    "access": null, // 
    "name": null, // optionally can give the collection a name if you want.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LinkifyMultiple;
console.log(exampleParsed);
```




