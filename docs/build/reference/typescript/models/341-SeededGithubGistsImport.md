---
title: SeededGithubGistsImport | TypeScript SDK
---


# SeededGithubGistsImport

This is the body of the /github/gists/import,  by default we will look for everything from your private gists, (TODO hook up public gists.)&& get clever  currently we will not ensure that this is a good pieces for you but we will just get you the gist and let you do what you want with it(room for improvement, if we want to layer in advanced pieces discovery)  For the future, we might want to add a max number of assets that are returned from this.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**application** | **string**
**_public** | **boolean**

## Example

```typescript
import { SeededGithubGistsImport } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededGithubGistsImport = {
    "schema": null,
    "application": null,
    "_public": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededGithubGistsImport
console.log(exampleParsed)
```


