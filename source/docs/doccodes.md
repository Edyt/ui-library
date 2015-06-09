## YAML Frontmatter needed!

# DocCodes

Hierarchy of stickers is as follows:

1. There are **2526** total DocCodes
2. They will be grouped in a yet-to-be-determined number of groups (may also bec named "qualifiers", TBD)
3. There will be a subset of those groups that will be used for the Examiner's Table of Contents in the Dossier Contents List.

It might be worth creating a simple JSON API endpoint ourselves that maintains this list and this grouping, so that it can be easily updated and used. Think:

```
/doccodes/v1/all                     # lists all 2526 of the doccodes in a flat list
/doccodes/v1/roles/examiner          # lists a subset of the groups and their codes relevant for Examiners (could be 1 to many groups)

# Response type breakdown:
/doccodes/v1/roles/examiner/groups   # flat list of groups
/doccodes/v1/roles/examiner/codes    # flat list of codes
/doccodes/v1/roles/examiner          # nested response object of {groupA: [codes], groupB: [codes]}

/doccodes/v1/roles/formalities       # lists a subset of the groups and their codes relevant for Formalities Officers
/doccodes/v1/groups                  # lists the currently configured groups themselves (not their contents)
/doccodes/v1/groups/priority         # lists the group 'priority' and its codes
/doccodes/v1/groups/replies          # lists the group 'replies' and its codes
/doccodes/v1/groups/all              # lists all 2526 codes, grouped in their respective group
/doccodes/v1/phase/…
/doccodes/v1/dossiertype/…
/doccodes/v1/…
```

It may be that some codes appear in more than one group. This is TBD. If so, we would list 2526 codes in `/doccodes/all` and effectively 2526 + _n_ duplicates in `/doccodes/groups/all`.



# Difference between DocCodes and Stickers

Stickers MAY refer to DocCodes, but they are not 1:1 the same. Usually, in fact, they are not.

Stickers are used as flags or labels on the level of the dossier itself. Some Stickers are also DocCodes, but not all.




# MOVE THIS TO A NEW DOCUMENT: Distinction between Substantive Documents and All (= Substantive + Non-Substantive)

Substantive documents = relevant for Examiner to do the examination process (anything of a technical substantial nature)
Non-substantive docs  = everything else
All                   = both sets of documents combined

Examiners by default get a Table of Contents in the Dossier Contents List that is subset to Substantive documents only. 

When an applicant sends in a new document, e.g. a letter accompanying a fee payment, that is not relevant for Examiner, but is the critical part of the FO's task. The FO will have to see All by default. The Examiner does not, but may want to.

Dossier Contents List will therefore provide a toggle, `Substantive | All`, to change the view at will.
