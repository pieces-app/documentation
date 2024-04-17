---
title: FlattenedFormat | TypeScript SDK
---


# FlattenedFormat

A representation of Data for a particular Form Factor of an Asset.[DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. FlattenedFormat.asset is Type String  fragment or file will always be defined. Even thought they are both optional.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**creator** | **string**
**classification** | [**Classification**](Classification)
**icon** | **string**
**role** | [**Role**](Role)
**application** | [**Application**](Application)
**asset** | **string**
**bytes** | [**ByteDescriptor**](ByteDescriptor)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**synced** | [**GroupedTimestamp**](GroupedTimestamp)
**cloud** | **string**
**fragment** | [**FragmentFormat**](FragmentFormat)
**file** | [**FileFormat**](FileFormat)
**analysis** | [**FlattenedAnalysis**](FlattenedAnalysis)
**relationship** | [**Relationship**](Relationship)
**activities** | [**FlattenedActivities**](FlattenedActivities)

## Example

```typescript
import { FlattenedFormat } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedFormat = {
    "schema": null,
    "id": 102ff265-fdfb-4142-8d94-4932d400199c,
    "creator": 497f6eca-6276-4993-bfeb-53cbbbba6f08,
    "classification": null,
    "icon": null,
    "role": null,
    "application": null,
    "asset": 6a2f41a3-c54c-fce8-32d2-0324e1c32e22,
    "bytes": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "synced": null,
    "cloud": null,
    "fragment": null,
    "file": null,
    "analysis": null,
    "relationship": null,
    "activities": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedFormat
console.log(exampleParsed)
```


