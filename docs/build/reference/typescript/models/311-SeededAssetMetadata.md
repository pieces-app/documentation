---
title: SeededAssetMetadata | TypeScript SDK
---


# SeededAssetMetadata

This is optional metadata sent with the SeededAsset and other SeededAssets ie (UE, Jetbrains...)  Note: if a user/develop didnt explicitly state a mechanism we will default to manual(user Driven only)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**tags** | [**Array&lt;SeededAssetTag&gt;**](SeededAssetTag)
**websites** | [**Array&lt;SeededAssetWebsite&gt;**](SeededAssetWebsite)
**sensitives** | [**Array&lt;SeededAssetSensitive&gt;**](SeededAssetSensitive)
**persons** | [**Array&lt;SeededPerson&gt;**](SeededPerson)
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation)
**hints** | [**Array&lt;SeededHint&gt;**](SeededHint)
**anchors** | [**Array&lt;SeededAnchor&gt;**](SeededAnchor)


