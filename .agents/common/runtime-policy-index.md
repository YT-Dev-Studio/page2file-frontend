# Runtime Policy Index

Purpose: keep source-graph navigation out of the always-on runtime entrypoint.

Load policy from the owning skill or affected surface, not from this index as a batch. The compact entrypoint selects workflow scale and skill; `common/core/runtime-core-policy.md` supplies shared behavior; the selected skill then points to any detailed common rules or references needed for the active slice.

Graph metadata in this source file supports maintenance and link validation. Generated runtime targets strip that metadata.
