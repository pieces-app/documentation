---
title: QGPTPersonsRelatedOutput | TypeScript SDK
---


# QGPTPersonsRelatedOutput

This model is used for the output of the /qgpt/related/persons endpoint.  Explanations here is a custom object with key value pairs, when the key is the personUUId and the value is an explanation as to why this person was reccommended.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**persons** | [**Persons**](Persons)
**explanations** | **\{ [key: string]: string; \}**


