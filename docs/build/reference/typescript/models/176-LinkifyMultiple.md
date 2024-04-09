
# LinkifyMultiple

This is the incoming linkify model.  if access is PRIVATE then please provide and array of users to enable the link for.  Assumption, all assets are already backed up to the cloud. 

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**assets** | **Array&lt;string&gt;**
**users** | [**Array&lt;SeededUser&gt;**](SeededUser)
**access** | [**AccessEnum**](AccessEnum)
**name** | **string**

## Example

```typescript
import { LinkifyMultiple } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: LinkifyMultiple = {
    "schema": null,
    "assets": null,
    "users": null,
    "access": null,
    "name": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LinkifyMultiple;
console.log(exampleParsed);
```


