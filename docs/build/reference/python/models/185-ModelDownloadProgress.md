---
title: ModelDownloadProgress | Python SDK
---

# ModelDownloadProgress

This is the model that is sent over our ws for streaming the progress of a model that is being downloaded.  can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**status** | [**ModelDownloadProgressStatusEnum**](ModelDownloadProgressStatusEnum) |  | [optional] 
**percentage** | **float** | Optionally if the download is in progress you will recieve a download percent(from 0-100). | [optional] 


