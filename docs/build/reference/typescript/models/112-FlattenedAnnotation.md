
# FlattenedAnnotation

This is the flattened Version of the annotation, IMPORTANT: when referencing these, ONLY Take the UUID, do NOT polinate(ie w/ asset/person/model) the FlattenedAnnotation as it can create an infinite loop.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**person** | [**ReferencedPerson**](ReferencedPerson)
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum)
**text** | **string**
**model** | [**ReferencedModel**](ReferencedModel)
**pseudo** | **boolean**
**favorited** | **boolean**
**anchor** | [**ReferencedAnchor**](ReferencedAnchor)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**score** | [**Score**](Score)
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages)
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary)

## Example

```typescript
import { FlattenedAnnotation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FlattenedAnnotation = {
    "schema": null,
    "id": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "mechanism": null,
    "asset": null,
    "person": null,
    "type": null,
    "text": null,
    "model": null,
    "pseudo": null,
    "favorited": null,
    "anchor": null,
    "conversation": null,
    "score": null,
    "messages": null,
    "summary": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnnotation;
console.log(exampleParsed);
```


