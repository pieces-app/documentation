---
title: ResultedPKCE | Python SDK
---

# ResultedPKCE

A Model To Represent the Code Returned from a PKCE Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**code** | **str** | The PKCE Code to be used to access a Token. | 
**state** | **str** | Likely the state that will be returned which should match the requested state as well as the nonce | 


