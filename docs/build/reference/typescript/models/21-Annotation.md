
# Annotation

An Annotation is the replacement for descriptions, this will enable comments, description, summaries and many more.  person on here is a reference to the description/comment/annotation about a person  NOTE: person here is NOT the creator of the annotaion. but rather the descriptions of the person. NOTE****: if we want to add \"who\" wrote the annotation, we will want to add a new field on here called author && will need to also layer in behavior the enable an author(person) and an asset both being referenced(ensure you check the side effect in the AssetsFacade.delete)

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
import { Annotation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Annotation = {
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
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Annotation
console.log(exampleParsed)
```


