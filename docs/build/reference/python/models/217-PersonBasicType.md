---
title: PersonBasicType | Python SDK
---

# PersonBasicType

This is all optional properties around the most basic information around a non-pieces user.  A Basic type will NOT have a scope as it is not an actual pieces user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**username** | **str** | username or twitter handle...etc | [optional] 
**name** | **str** | This is the name of the basic user. | [optional] 
**picture** | **str** | this is a url picture representation of a user. | [optional] 
**email** | **str** | an email that was extracted. | [optional] 
**sourced** | [**ExternallySourcedEnum**](ExternallySourcedEnum) |  | [optional] 
**url** | **str** | This is a specific url that this basic user came from. | [optional] 
**mailgun** | [**MailgunMetadata**](MailgunMetadata) |  | [optional] 


