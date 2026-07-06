# F003 - ATA Assets

Version: 0.1

Status: Complete

Priority: Highest

Owner: ATA Project

---

# 1. Overview

ATA Assets is the shared translation knowledge repository of ATA.

Unlike personal Workspace History, Assets contain reusable knowledge that benefits the entire organization.

Assets are considered company knowledge rather than individual data.

---

# 2. Goal

Assets should allow users to:

- Reuse approved translations
- Maintain terminology consistency
- Reduce repetitive work
- Build translation knowledge over time

---

# 3. Scope (V0.1)

Included

- Shared translation assets
- Search
- Recommendation
- Asset categories

Not Included

- Asset approval workflow
- Version comparison
- Asset statistics
- Import / Export

---

# 4. Asset Types

Supported asset categories

- UI Translation
- Email
- Manual
- FAQ
- Product Description
- Terminology
- Notes

Manual and FAQ belong to the same category.

---

# 5. Asset Recommendation

Assets should be recommended automatically.

Recommendations are generated based on:

- Source text
- Selected Mode
- Similar translations
- Keywords

Users do not manually request asset recommendations.

---

# 6. Search

Search is available for all assets.

Supported search methods

- Keyword
- Product name
- Translation
- Original text

Search should be fast and always accessible.

---

# 7. Shared Knowledge

Assets are shared by all users.

Changes to Assets may affect future recommendations.

Personal Workspace History is never merged into Assets automatically.

---

# 8. Saving Policy

Translation results are not saved immediately.

Knowledge is stored only after completing the appropriate save or review flow.

The main workspace should not display a standalone "Save to Knowledge" button.

---

# 9. Design Principles

Knowledge accumulation is more important than translation quantity.

Assets represent verified translation knowledge.

Duplicate entries should be minimized.

---

# 10. Related Features

F001 Translation Workspace

F002 User Profile

F004 Workspace History

F005 Mode System

F009 Review Workflow

---

# 11. Future (V2)

Not included in V0.1

- Asset version history
- Approval records
- Similarity score
- AI explanation for recommendations
- Asset merge
- Duplicate detection

---

End of Specification