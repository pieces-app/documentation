---
title: ModelDownloadProgress | TypeScript SDK
---


# ModelDownloadProgress

This is the model that is sent over our ws for streaming the progress of a model that is being downloaded.  can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**status** | [**ModelDownloadProgressStatusEnum**](ModelDownloadProgressStatusEnum)
**percentage** | **number**


