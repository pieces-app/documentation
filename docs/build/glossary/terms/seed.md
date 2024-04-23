---
title: Seed
description: A seed is a starting point for creating different materials in Pieces SDKs.
category: Assets
---

Seeds are typically used in Pieces SDKs and require a minimum amount of information to create different materials. These will come into the API with an identifier (ID) and can be used to create a fully referenced asset with generated metadata. All assets have a seeded version of it that is always its starting place. For example, a Tag will first start as a SeededTag and will become a Tag after it is created in the Pieces database. Similarly, an Asset originally starts from a seed, SeededAsset, and then goes through its specific create pipeline and eventually becomes a fully referenced Asset.
