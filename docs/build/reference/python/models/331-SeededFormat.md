---
title: SeededFormat | Python SDK
---

# SeededFormat

This is seeded data that will be come a format.  We will throw an Error if, 1) file and fragment are both defined, 2) file and fragment are both null.  if this is being used within the /assets/create endpoint or the /\{application\}/create endpoint, we will not take the classificaiton into account, as it is only used in the syntax highlighting related endpoints.That being said if you do want to override your classification, please look at the metadata within the file or the fragment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**file** | [**SeededFile**](SeededFile) |  | [optional] 
**fragment** | [**SeededFragment**](SeededFragment) |  | [optional] 
**classification** | [**SeededClassification**](SeededClassification) |  | [optional] 


