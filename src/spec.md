# Specification

## Summary
**Goal:** Create a minimalist, modern fitness blog called “Gao Fitness Experience” with backend endpoints to create and fetch posts for display.

**Planned changes:**
- Implement a persistent BlogPost data model (id, title, content, createdAt) in a single Motoko actor with stable storage across upgrades.
- Add a backend create-post update endpoint that requires non-empty title and content.
- Add a backend query endpoint to list posts newest-first for the frontend.
- Build a minimalist, modern frontend that fetches and displays posts (title, date, content) with an English empty-state when no posts exist.
- Add a site-wide footer with “Gao Fitness Experience” and an English “All rights reserved” notice.
- Apply a consistent minimalist theme (typography, spacing, layout) avoiding blue/purple as primary colors.

**User-visible outcome:** Visitors can view a clean, modern “Gao Fitness Experience” homepage that lists blog posts from newest to oldest (or shows an English empty-state), with consistent branding in the header and a site-wide footer; posts can be created via a backend endpoint and will persist through upgrades.
