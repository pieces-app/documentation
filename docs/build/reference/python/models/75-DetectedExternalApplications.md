---
title: DetectedExternalApplications | Python SDK
---

# DetectedExternalApplications

This is used as the returnable for the /applications/external && /applications/external/related endpoints.  This will return an iterable of Deteched Application a detected Application is an application that is currently installed on your machine.  the /applications/external/related endpoint, will return a subset of the applications returned mainly applications that we detect are Pieces Applications that you have yet to install + names of applications where Pieces is coming soon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[DetectedExternalApplication]**](DetectedExternalApplication) |  | 


