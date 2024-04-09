
# Distribution

This is a fully referenced version of a Distribution. TODO add additional distributions such as slack, google_chat, ...etc

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**share** | [**FlattenedShare**](FlattenedShare)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mailgun** | [**MailgunDistribution**](MailgunDistribution)
**github** | [**GitHubDistribution**](GitHubDistribution)

## Example

```typescript
import { Distribution } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Distribution = {
    "schema": null,
    "id": null,
    "share": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "mailgun": null,
    "github": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Distribution;
console.log(exampleParsed);
```


