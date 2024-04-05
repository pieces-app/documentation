
# ExportedDatabase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyses** | **Array&lt;number&gt;** |  | [default to undefined]
**applications** | **Array&lt;number&gt;** |  | [default to undefined]
**assets** | **Array&lt;number&gt;** |  | [default to undefined]
**codeAnalyses** | **Array&lt;number&gt;** |  | [default to undefined]
**files** | **Array&lt;number&gt;** |  | [default to undefined]
**formatMetrics** | **Array&lt;number&gt;** |  | [default to undefined]
**formats** | **Array&lt;number&gt;** |  | [default to undefined]
**fragments** | **Array&lt;number&gt;** |  | [default to undefined]
**imageAnalyses** | **Array&lt;number&gt;** |  | [default to undefined]
**models** | **Array&lt;number&gt;** |  | [default to undefined]
**ocrAnalyses** | **Array&lt;number&gt;** |  | [default to undefined]
**persons** | **Array&lt;number&gt;** |  | [default to undefined]
**sensitives** | **Array&lt;number&gt;** |  | [default to undefined]
**tags** | **Array&lt;number&gt;** |  | [default to undefined]
**websites** | **Array&lt;number&gt;** |  | [default to undefined]
**values** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats) |  | [default to undefined]
**version** | **string** | This is the version of your os_server or cloud_server that we we exporting from. | [default to undefined]
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**relationships** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**activities** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**annotations** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**hints** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**anchors** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**anchorPoints** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**conversations** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**conversationMessages** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**workstreamEvents** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**ranges** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**workstreamSummaries** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**messageValues** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats) |  | [optional] [default to undefined]
**workstreamEventValues** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats) |  | [optional] [default to undefined]

## Example

```typescript
import { ExportedDatabase } from '';

// TODO: Update the object below with actual values
const example: ExportedDatabase = {
    "analyses": null, // 
    "applications": null, // 
    "assets": null, // 
    "codeAnalyses": null, // 
    "files": null, // 
    "formatMetrics": null, // 
    "formats": null, // 
    "fragments": null, // 
    "imageAnalyses": null, // 
    "models": null, // 
    "ocrAnalyses": null, // 
    "persons": null, // 
    "sensitives": null, // 
    "tags": null, // 
    "websites": null, // 
    "values": null, // 
    "version": null, // This is the version of your os_server or cloud_server that we we exporting from.
    "schema": null, // 
    "relationships": null, // 
    "activities": null, // 
    "annotations": null, // 
    "hints": null, // 
    "anchors": null, // 
    "anchorPoints": null, // 
    "conversations": null, // 
    "conversationMessages": null, // 
    "workstreamEvents": null, // 
    "ranges": null, // 
    "workstreamSummaries": null, // 
    "messageValues": null, // 
    "workstreamEventValues": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportedDatabase;
console.log(exampleParsed);
```




