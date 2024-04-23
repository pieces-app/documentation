---
title: CodeAnalysis | TypeScript SDK
---


# CodeAnalysis

This is the ML Analysis object Specific to code.  prediction and similarity are custom types. ** please dont not modify **

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**tokenized** | **Array&lt;string&gt;**
**language** | **string**
**type** | [**ClassificationGenericEnum**](ClassificationGenericEnum)
**prediction** | **\{ [key: string]: number; \}**
**similarity** | **\{ [key: string]: number; \}**
**top5Colors** | **Array&lt;number&gt;**
**top5Sorted** | **Array&lt;string&gt;**
**id** | **string**
**analysis** | **string**
**model** | [**Model**](Model)


