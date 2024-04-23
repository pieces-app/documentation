---
title: FlattenedPersons | Python SDK
---

# FlattenedPersons

This is the plural of Person. will have top level meta about the person including an iterable of all the person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedPerson]**](ReferencedPerson) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an person id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 


