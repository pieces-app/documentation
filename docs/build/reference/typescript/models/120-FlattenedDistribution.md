
# FlattenedDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**share** | **string** | This is the UUId of the share. | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**mailgun** | [**MailgunDistribution**](MailgunDistribution) |  | [optional] [default to undefined]
**github** | [**GitHubDistribution**](GitHubDistribution) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedDistribution } from '';

// TODO: Update the object below with actual values
const example: FlattenedDistribution = {
    "schema": null, // 
    "id": null, // 
    "share": null, // This is the UUId of the share.
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "mailgun": null, // 
    "github": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedDistribution;
console.log(exampleParsed);
```




