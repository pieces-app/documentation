
# Relationship

A relationship expresses a graph of like types, to build a relationship graph.   To get the type of relationship, this is for ie Asset, tag, website, format ...etc, you will need to iterate through the edges and get the root or you can just get the first edge\'s type as a relationship can only be expressed through same type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**embeddings** | [**Embeddings**](Embeddings) |  | [default to undefined]
**edges** | [**Edges**](Edges) |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]

## Example

```typescript
import { Relationship } from '';

// TODO: Update the object below with actual values
const example: Relationship = {
    "id": null, // 
    "schema": null, // 
    "embeddings": null, // 
    "edges": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Relationship;
console.log(exampleParsed);
```




