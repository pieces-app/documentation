
# OnboardedPersonaDetails

This is an out body for the /machine_learning/text/technical_processing/generators/personification endpoint.  This will have accepted some of the personal details (in the input body) ie languages/personas && will transform this in to onbaording snippets that we will return with this model

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**seeds** | [**Seeds**](Seeds)

## Example

```typescript
import { OnboardedPersonaDetails } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: OnboardedPersonaDetails = {
    "schema": null,
    "seeds": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnboardedPersonaDetails;
console.log(exampleParsed);
```


