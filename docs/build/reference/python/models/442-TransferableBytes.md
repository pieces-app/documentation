---
title: TransferableBytes | Python SDK
---

# TransferableBytes

Bytes is a Model for A FileFormat. Raw and file are the only 2 that are currently supported. Raw and file are an array of integers that represent the file.Typical conversion UTF8 -> array[int] or UTF8 -> array[bytes(in hexidecimal)] -> array[int]. Either way you convert is up to you but the type we need here is an array of integers.  [NOT IMPLEMENTED] base64, base64_url, data_url [IMPLEMENTED] raw

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**raw** | **List[int]** | IMPLEMENTED | [optional] 
**var_base64** | **List[int]** | NOT IMPLEMENTED | [optional] 
**base64_url** | **List[int]** | NOT IMPLEMENTED | [optional] 
**data_url** | **List[int]** | NOT IMPLEMENTED | [optional] 


