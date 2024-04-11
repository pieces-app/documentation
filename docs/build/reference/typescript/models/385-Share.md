
# Share Model

This represents what information that is relavent to anything and every sharing related. v1 will look very bare and will add more and more data as we go!  if user is undefined && access is public then we have an asset that is publicly available.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**user** | **string**
**asset** | [**FlattenedAsset**](FlattenedAsset)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**link** | **string**
**access** | [**AccessEnum**](AccessEnum)
**accessors** | [**Accessors**](Accessors)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**_short** | **string**
**name** | **string**
**distributions** | [**Distributions**](Distributions)
**score** | [**Score**](Score)

## Example Model

```typescript
import { Share } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Share = {
    "schema": null,
    "id": null,
    "user": null,
    "asset": null,
    "assets": null,
    "link": null,
    "access": null,
    "accessors": null,
    "created": null,
    "_short": null,
    "name": null,
    "distributions": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Share
console.log(exampleParsed)
```


