---
title: SeededTag | TypeScript SDK
---


# SeededTag

This is the minimum information needed when creating a Tag.  Default we will attach manual to a tag unless otherwise specified for mechanism.  you can optionally add an asset, format, or person uuid to attach this tag directly to it  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**text** | **string**
**asset** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**category** | [**TagCategoryEnum**](TagCategoryEnum)
**person** | **string**


