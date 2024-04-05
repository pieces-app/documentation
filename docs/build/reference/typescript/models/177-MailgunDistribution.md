
# MailgunDistribution

This is a specific Distribution for mailgun specific information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**recipients** | [**Recipients**](Recipients) |  | [default to undefined]

## Example

```typescript
import { MailgunDistribution } from '';

// TODO: Update the object below with actual values
const example: MailgunDistribution = {
    "schema": null, // 
    "recipients": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailgunDistribution;
console.log(exampleParsed);
```




