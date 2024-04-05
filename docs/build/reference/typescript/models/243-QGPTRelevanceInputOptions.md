
# QGPTRelevanceInputOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**database** | **boolean** | This is an optional boolen that will tell us to use our entire snippet database as the sample. | [optional] [default to undefined]
**question** | **boolean** | This is an optional boolean, that will let the serve know if you want to combine the 2 endpointsboth relevance &amp;&amp; the Question endpoint to return the final results. | [optional] [default to undefined]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] [default to undefined]

## Example

```typescript
import { QGPTRelevanceInputOptions } from '';

// TODO: Update the object below with actual values
const example: QGPTRelevanceInputOptions = {
    "schema": null, // 
    "database": null, // This is an optional boolen that will tell us to use our entire snippet database as the sample.
    "question": null, // This is an optional boolean, that will let the serve know if you want to combine the 2 endpointsboth relevance &amp;&amp; the Question endpoint to return the final results.
    "pipeline": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTRelevanceInputOptions;
console.log(exampleParsed);
```




