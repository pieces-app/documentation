
# PersonModel

This is a PersonSpecific Model. and will let us know for all the assets that get attached to the person if, this person was attached via a model or just attached automatically.  explanation here are the reason why a Person was attached to an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] [default to undefined]
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**explanation** | [**ReferencedAnnotation**](ReferencedAnnotation) |  | [optional] [default to undefined]

## Example

```typescript
import { PersonModel } from '';

// TODO: Update the object below with actual values
const example: PersonModel = {
    "asset": null, // 
    "model": null, // 
    "deleted": null, // 
    "explanation": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonModel;
console.log(exampleParsed);
```




