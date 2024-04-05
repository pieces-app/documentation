
# SeededWebsite

This is the minimum information required to create a website for a specific asset.  you can optionally add an asset, or person id to attach this website directly to it  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | **string** | This is the specific asset that this website is going to get attached to!! | [optional] [default to undefined]
**conversation** | **string** | This is the specific conversation that this website is going to get attached to!! | [optional] [default to undefined]
**url** | **string** | this is the url of the website. | [default to undefined]
**name** | **string** | name of the website.(customizable and updateable as well.) | [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**person** | **string** | this is a uuid of a person that we are going to add the website too. | [optional] [default to undefined]

## Example

```typescript
import { SeededWebsite } from '';

// TODO: Update the object below with actual values
const example: SeededWebsite = {
    "schema": null, // 
    "asset": null, // This is the specific asset that this website is going to get attached to!!
    "conversation": null, // This is the specific conversation that this website is going to get attached to!!
    "url": null, // this is the url of the website.
    "name": null, // name of the website.(customizable and updateable as well.)
    "mechanism": null, // 
    "person": null, // this is a uuid of a person that we are going to add the website too.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededWebsite;
console.log(exampleParsed);
```




