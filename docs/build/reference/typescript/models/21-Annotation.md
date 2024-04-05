
# Annotation

An Annotation is the replacement for descriptions, this will enable comments, description, summaries and many more.  person on here is a reference to the description/comment/annotation about a person  NOTE: person here is NOT the creator of the annotaion. but rather the descriptions of the person. NOTE****: if we want to add \"who\" wrote the annotation, we will want to add a new field on here called author && will need to also layer in behavior the enable an author(person) and an asset both being referenced(ensure you check the side effect in the AssetsFacade.delete)

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
import { Annotation } from '';

// TODO: Update the object below with actual values
const example: Annotation = {
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
const exampleParsed = JSON.parse(exampleJSON) as Annotation;
console.log(exampleParsed);
```




