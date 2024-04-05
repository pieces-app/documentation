
# SeededGithubGistsImport

This is the body of the /github/gists/import,  by default we will look for everything from your private gists, (TODO hook up public gists.)&& get clever  currently we will not ensure that this is a good pieces for you but we will just get you the gist and let you do what you want with it(room for improvement, if we want to layer in advanced pieces discovery)  For the future, we might want to add a max number of assets that are returned from this.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**application** | **string** | application id. | [default to undefined]
**_public** | **boolean** | This will default to false.(ie private), currently not supporting pulling public gists. | [optional] [default to undefined]

## Example

```typescript
import { SeededGithubGistsImport } from '';

// TODO: Update the object below with actual values
const example: SeededGithubGistsImport = {
    "schema": null, // 
    "application": null, // application id.
    "_public": null, // This will default to false.(ie private), currently not supporting pulling public gists.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededGithubGistsImport;
console.log(exampleParsed);
```




