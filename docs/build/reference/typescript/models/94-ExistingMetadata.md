---
title: ExistingMetadata | TypeScript SDK
---


# ExistingMetadata

This is a shared input model for all the exists endpoints: /tags/exists : if the tag exists you will have a defined tag:ReferencedTag, if not then it doesnt exist. /websites/exists: if the url exists you will have a defined website:ReferencedWebsite, if not then it doesnt exist.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**website** | [**ReferencedWebsite**](ReferencedWebsite)
**tag** | [**ReferencedTag**](ReferencedTag)


