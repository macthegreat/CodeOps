
# Day 44 — Metadata & SEO

## Implemented
- Root metadata with title template and metadataBase.
- Menu page metadata and canonical URL.
- Dynamic dish metadata derived from dish records.
- Open Graph metadata for dish pages.
- MenuItem JSON-LD using dish name, description, and ETB price.
- Generated sitemap excluding private routes.
- robots.txt disallowing private routes and linking to the sitemap.

## Verification
- Production build: Passed.
- sitemap.xml: Generated.
- robots.txt: Generated.
- Page source inspection: Pending.
- Social preview image: Pending.
- Per-dish generated Open Graph image: Pending.

## Notes
- Confirm the production domain before deployment.
- Confirm structured data matches the rendered dish price.
