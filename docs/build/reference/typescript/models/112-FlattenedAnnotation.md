
# FlattenedAnnotation

This is the flattened Version of the annotation, IMPORTANT: when referencing these, ONLY Take the UUID, do NOT polinate(ie w/ asset/person/model) the FlattenedAnnotation as it can create an infinite loop.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] [default to undefined]
**person** | [**ReferencedPerson**](ReferencedPerson) |  | [optional] [default to undefined]
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum) |  | [default to undefined]
**text** | **string** | This is the text of the annotation. | [default to undefined]
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] [default to undefined]
**pseudo** | **boolean** |  | [optional] [default to undefined]
**favorited** | **boolean** |  | [optional] [default to undefined]
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  | [optional] [default to undefined]
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] [default to undefined]
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedAnnotation } from '';

// TODO: Update the object below with actual values
const example: FlattenedAnnotation = {
    "schema": null, // 
    "id": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "mechanism": null, // 
    "asset": null, // 
    "person": null, // 
    "type": null, // 
    "text": null, // This is the text of the annotation.
    "model": null, // 
    "pseudo": null, // 
    "favorited": null, // 
    "anchor": null, // 
    "conversation": null, // 
    "score": null, // 
    "messages": null, // 
    "summary": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnnotation;
console.log(exampleParsed);
```




