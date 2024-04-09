
# SeededAnnotation

This is the percursor to a fully referenced Annotation.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**asset** | **string**
**person** | **string**
**type** | [**AnnotationTypeEnum**](AnnotationTypeEnum)
**text** | **string**
**model** | **string**
**pseudo** | **boolean**
**favorited** | **boolean**
**anchor** | **string**
**conversation** | **string**
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages)

## Example

```typescript
import { SeededAnnotation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededAnnotation = {
    "schema": null,
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
    "messages": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAnnotation;
console.log(exampleParsed);
```


