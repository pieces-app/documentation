
# MechanismEnum

This will let us know how an asset was uploaded.  MANUAL: this is an event such as a user driven send to pieces, or a paste to pieces.  RECOMMENDED: This is an event that was initiall recommended via the suggestion flow, and a user decided totake the recommendation.  AUTOMATIC: This is not user driven at all and the asset was automatically uploaded via the suggestion flow. or other methods.  INTERNAL: This is an undelete able enum used for internal use only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```typescript
import { MechanismEnum } from '';

// TODO: Update the object below with actual values
const example: MechanismEnum = {
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MechanismEnum;
console.log(exampleParsed);
```




