# InteractedAssets


A collection of interacted assets, used in the bulk upload flow for clustering and uploading snippets. InteractedAssets is a plural model used in the bulk upload flow of Pieces OS. It represents a collection of interacted assets, which are snippets of code that have been interacted with by the user. These assets can be either already snippetized and clustered, or they may need to undergo snippetization and clustering before they can be uploaded. The InteractedAssets model contains properties such as the application ID, an iterable of interacted assets, and a schema for the assets. It also provides methods for converting the model to and from JSON and a dictionary, allowing for easy serialization and deserialization.
