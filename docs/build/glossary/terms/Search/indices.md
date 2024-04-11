# Indices


This is a map of IDs or identifiers that map to a value which is an integer from -1 -> infinity. These index Maps are only on plural Models, such as Asset.websites, Asset.tags, or Assets, ...XYZ (in these cases Tags/Websites/Assets, but not limited to just these). A uuid will map to an int, which is its place in the iterable (array) on the plural models. This will also let us know what was previously referenced but removed, signaled with a -1, and will get fully cleared on shut down and boot up.
