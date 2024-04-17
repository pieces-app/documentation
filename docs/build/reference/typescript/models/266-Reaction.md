---
title: Reaction | TypeScript SDK
---


# Reaction

This will the the Request body of the Request Endpoint.  Reuse will not be required here because we do NOT know if the user will choose to reuse what we have suggested.  save will however be required because this will let us know if we should save the coppied asset that was first sent over or not.  seed is required, because we will want to know 100% sure what the original suggestion was made against.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**save** | **boolean**
**reuse** | [**ReuseReaction**](ReuseReaction)
**seed** | [**SeededConnectorCreation**](SeededConnectorCreation)


