
# QGPTRelevanceInput

This is the input body for the /code_gpt/relevance endpoint.  There are a couple different options that you may take with this Model.  First we will talk about the space in which you will compare your query too. These are the following cases for the space. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  Note: - for ease of use, we have an additional boolean called \'question\', which will also ask your question to gpt3.5, and compare to the relevant snippets that we found. That way you dont need to call /code_gpt/question. Otherwise the next step would be is to take the results and feed them into /code_gpt/question. to get your question answered.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**query** | **string**
**paths** | **Array&lt;string&gt;**
**seeds** | [**Seeds**](Seeds)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages)
**options** | [**QGPTRelevanceInputOptions**](QGPTRelevanceInputOptions)
**application** | **string**
**model** | **string**
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding)

## Example

```typescript
import { QGPTRelevanceInput } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: QGPTRelevanceInput = {
    "schema": null,
    "query": null,
    "paths": null,
    "seeds": null,
    "assets": null,
    "messages": null,
    "options": null,
    "application": null,
    "model": null,
    "temporal": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTRelevanceInput;
console.log(exampleParsed);
```


