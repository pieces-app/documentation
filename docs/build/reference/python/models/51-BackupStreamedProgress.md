---
title: BackupStreamedProgress | Python SDK
---

# BackupStreamedProgress

This is a specific model to the /backups/create/streamed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**status** | [**ModelDownloadProgressStatusEnum**](ModelDownloadProgressStatusEnum) |  | [optional] 
**percentage** | **float** | Optionally if the download is in progress you will recieve a download percent(from 0-100). | [optional] 
**backup** | [**Backup**](Backup) |  | [optional] 


