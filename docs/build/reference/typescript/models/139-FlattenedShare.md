
# FlattenedShare Model

This is a dag safe version of the Share.  if user is undefined && access is public then we have an asset that is publicly available.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**asset** | **string**
**user** | **string**
**link** | **string**
**access** | [**AccessEnum**](AccessEnum)
**accessors** | [**Accessors**](Accessors)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**_short** | **string**
**name** | **string**
**assets** | [**FlattenedAssets**](FlattenedAssets)
**distributions** | [**FlattenedDistributions**](FlattenedDistributions)
**score** | [**Score**](Score)

## Example Model

```typescript
import { FlattenedShare } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedShare = {
    "schema": null,
    "id": null,
    "asset": null,
    "user": null,
    "link": null,
    "access": null,
    "accessors": null,
    "created": null,
    "_short": null,
    "name": null,
    "assets": null,
    "distributions": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedShare
console.log(exampleParsed)
```


