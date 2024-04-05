
# SeededAnnotation

This is the percursor to a fully referenced Annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**asset** | **string** |  | [optional] [default to undefined]
**person** | **string** |  | [optional] [default to undefined]
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum) |  | [default to undefined]
**text** | **string** | This is the text of the annotation. | [default to undefined]
**model** | **string** |  | [optional] [default to undefined]
**pseudo** | **boolean** |  | [optional] [default to undefined]
**favorited** | **boolean** |  | [optional] [default to undefined]
**anchor** | **string** |  | [optional] [default to undefined]
**conversation** | **string** |  | [optional] [default to undefined]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededAnnotation } from '';

// TODO: Update the object below with actual values
const example: SeededAnnotation = {
    "schema": null, // 
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
    "messages": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAnnotation;
console.log(exampleParsed);
```




