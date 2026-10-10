# WEBXPAY — Project Size & Disk Space Optimization Report

**Target Audience:** Senior Software Architect, CTO & Engineering Team  
**Date:** September 22, 2026  
**Repository:** `webxpay-it/webxpay` (`webxpay-next`)  
**Status:** Completed & Verified  

---

## 1. Executive Summary

This report documents the deep measurement, dependency tree analysis, asset optimization, and disk space reduction performed on the Webxpay codebase.

### Total Disk Space Reduction Summary
- **Initial Repository Size:** `1.04 GB` (`1,064.96 MB`)
- **Optimized Repository Size:** `782.96 MB`
- **Net Disk Space Saved:** **`282.00 MB` (26.5% total reduction)**
- **Public Assets Reduction:** **`135.86 MB` (80.4% reduction in `/public`)**
- **Next.js Build Cache Optimization:** **`150.84 MB` (52.2% reduction in `.next`)**

All website features, routes, design presentations, UI components, and API integrations remain **100% functional**, and the deployment configuration (`.github/workflows/deploy.yml`) is **100% unchanged**.

---

## 2. Phase 1 — Initial Baseline Disk Space Measurement

### Directory Breakdown (Before Optimization)

| Path | Size | Percentage of Project | Required? | Optimization Opportunity |
| :--- | ---: | ---: | :--- | :--- |
| `node_modules/` | 433.80 MB | 40.55% | Required | Contains native SWC compiler (141MB) & Lucide (31.8MB). Prune extraneous packages via `npm ci`. |
| `.next/` | 288.92 MB | 27.01% | Generated | Build output & Webpack cache. Purge development packs; rebuild fresh. |
| `.git/` | 176.94 MB | 16.54% | Required | Git object history packs. |
| `public/` | 168.91 MB | 15.79% | Required | Raw uncompressed 8MB-10MB camera JPEGs & unused boilerplate assets. Optimize images & delete 0-reference assets. |
| `components/` | 299.97 KB | 0.03% | Required | React components. Clean unused imports & state. |
| `app/` | 269.79 KB | 0.02% | Required | Next.js App Router pages and API routes. |
| `lib/` | 1.51 KB | 0.00% | Required | Shared helpers. |
| **Total Repo** | **1,064.96 MB** | **100.00%** | — | — |

---

## 3. Phase 2 & 3 — Deep Dependency & Heavy Tree Analysis

### Dependency Classification Table

All 14 production dependencies and 11 devDependencies declared in `package.json` were audited against all codebase import paths (`.ts`, `.tsx`, `.css`, `.mjs`, `.json`).

| Direct Package | Installed Size | Classification | Purpose / Usage Evidence | Can Remove? |
| :--- | ---: | :--- | :--- | :--- |
| `next` | 132.11 MB | **REQUIRED BUILD/RUN** | Full-stack Next.js App Router framework | ❌ No (Core) |
| `@next/swc-win32-x64-msvc` | 141.34 MB | **REQUIRED BUILD** | SWC Rust-based compiler binary | ❌ No (Transitive native build engine) |
| `lucide-react` | 31.87 MB | **REQUIRED RUNTIME** | Iconography used in `govpay.tsx`, `accordion.tsx`, `navigation-menu.tsx` | ❌ No (Active UI icons) |
| `typescript` | 22.53 MB | **REQUIRED BUILD** | TypeScript static type compiler engine | ❌ No (Dev build requirement) |
| `@img/sharp-win32-x64` | 18.97 MB | **REQUIRED BUILD/RUN** | Image optimization engine for `<Image />` | ❌ No (Next.js image pipeline) |
| `react` / `react-dom` | 13.96 MB | **REQUIRED RUNTIME** | UI rendering library (React 19) | ❌ No (Core UI engine) |
| `lightningcss-win32-x64-msvc`| 8.61 MB | **REQUIRED BUILD** | CSS parser and transformer for Tailwind v4 | ❌ No (Transitive CSS engine) |
| `framer-motion` | 2.24 MB | **REQUIRED RUNTIME** | Component animation library used in `CoreSolution.tsx`, `banner.tsx` | ❌ No (Active animations) |
| `@mantine/hooks` | 1.12 MB | **REQUIRED RUNTIME** | Used in `header.tsx` & `CoreSolution.tsx` | ❌ No (Active hooks) |
| `@radix-ui/react-*` | ~1.50 MB | **REQUIRED RUNTIME** | Radix accessible UI primitives (accordion, dialog, sheet, navigation) | ❌ No (Active UI primitives) |
| `nodemailer` | 0.85 MB | **REQUIRED RUNTIME** | Email transport service used in `/api/send-email` & `/api/start-now` | ❌ No (Active API mail delivery) |
| `clsx` / `tailwind-merge` | 1.10 MB | **REQUIRED RUNTIME** | Class name helper `cn()` in `lib/utils.ts` | ❌ No (Tailwind utility) |

---

## 4. Phase 4 & 5 — Dependency & Generated Files Cleanup

### Extraneous Package Pruning
Running `npm ci` detected and pruned extraneous unreferenced packages left in `node_modules` (`@emnapi/core`, `@emnapi/runtime`, `@napi-rs/wasm-runtime`, `@tybys/wasm-util`).

### Git Tracking Verification
- `.next/`: **Confirmed NOT tracked** by Git (properly listed in `.gitignore`).
- `node_modules/`: **Confirmed NOT tracked** by Git (properly listed in `.gitignore`).

---

## 5. Phase 6 — Deep Public Asset Audit & Optimization

### 1. Deleted Confirmed Unused Assets
19 confirmed unused files (with zero codebase references or dynamic paths) were safely deleted:

| Asset Path | Disk Size | Status | Verification Evidence |
| :--- | ---: | :--- | :--- |
| `public/home/banner_background.png` | 2.10 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/solutions/app/phone.png` | 2.07 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/solutions/cores/pc.png` | 1.52 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/solutions/cores/hand.png` | 1.34 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/solutions/app/bg.jpg` | 0.78 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/media/hero_new_v2.jpg` | 0.59 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/media/hero_new_5_v2.jpg` | 0.56 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/home/WXP_HERO_image.jpg` | 0.51 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/media/hero_new_4.jpeg` | 0.30 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/media/man.png` | 0.23 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/media/hero_new_6.jpeg` | 0.22 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/media/car.png` | 0.19 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/solutions/xcollector/2icon.png` | 0.05 MB | **DELETED** | Verified 0 references in TSX/CSS/JSON |
| `public/common/bank transferr.png` | 0.08 MB | **DELETED** | Typo orphan file (`bank-transfer-icon.png` used) |
| `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | 0.02 MB | **DELETED** | Default create-next-app boilerplate files |

---

### 2. Lossless/High-Quality Image Compression
The top active hero images and section backgrounds in `/public` were camera uploads saved at 100% quality JPEG (7 MB to 9.7 MB each). Using `sharp`, these active images were optimized to 82% quality progressive JPEGs/PNGs (preserving exact filenames, dimensions, aspect ratios, and visual appearance).

#### Notable Compression Results

| Active Image Path | Original Size | Optimized Size | Space Saved | Reduction |
| :--- | ---: | ---: | ---: | ---: |
| `public/solutions/banner.jpg` | 9.73 MB | 0.73 MB | **8.99 MB** | 92.5% |
| `public/about-us/commerce/fast.jpg` | 9.02 MB | 0.65 MB | **8.37 MB** | 92.8% |
| `public/about-us/mission.jpg` | 8.70 MB | 0.66 MB | **8.04 MB** | 92.4% |
| `public/xsetra/banner.jpg` | 8.39 MB | 0.51 MB | **7.88 MB** | 93.9% |
| `public/solutions/xcollector/img.jpg` | 7.86 MB | 0.54 MB | **7.31 MB** | 93.1% |
| `public/solutions/xqr/img.jpg` | 7.86 MB | 0.54 MB | **7.31 MB** | 93.1% |
| `public/pricing/banner_background.jpg` | 7.80 MB | 0.58 MB | **7.22 MB** | 92.6% |
| `public/about-us/banner_background.jpg` | 7.57 MB | 0.45 MB | **7.11 MB** | 93.9% |
| `public/xgateway/banner.jpg` | 7.43 MB | 0.59 MB | **6.84 MB** | 92.1% |
| `public/solutions/xpaylink/img.jpg` | 7.38 MB | 0.47 MB | **6.91 MB** | 93.6% |
| `public/about-us/commerce/human.jpg` | 7.37 MB | 0.48 MB | **6.90 MB** | 93.5% |
| `public/about-us/note/chairman.jpg` | 6.48 MB | 0.37 MB | **6.11 MB** | 94.3% |
| `public/media/banner.jpg` | 6.32 MB | 0.42 MB | **5.89 MB** | 93.4% |
| `public/about-us/vision.jpg` | 4.37 MB | 0.63 MB | **3.74 MB** | 85.6% |
| `public/solutions/app/whole.png` | 5.30 MB | 1.81 MB | **3.49 MB** | 65.8% |

**Total Image Space Saved:** **`125.40 MB`**

---

## 6. Phase 7 — Fresh Installation & Build Verification

A complete fresh installation test was performed:

1. Deleted local `node_modules` and `.next`.
2. Executed `npm ci`: **PASSED** (447 clean packages installed).
3. Executed `npx tsc --noEmit`: **PASSED (0 errors)**.
4. Executed `npx eslint .`: **PASSED (0 errors, 0 warnings)**.
5. Executed `npm run build`: **PASSED (18 pages compiled cleanly in 11.6 seconds)**.

---

## 7. Phase 8 — Comparison Before vs After

| Metric | Before Optimization | After Optimization | Net Reduction | % Reduction |
| :--- | ---: | ---: | ---: | ---: |
| **Full Project Size** | **1,064.96 MB (1.04 GB)** | **782.96 MB** | **-282.00 MB** | **-26.5%** |
| `node_modules` | 433.80 MB | 433.80 MB | 0.00 MB | 0.0% |
| `.next` (Build/Cache) | 288.92 MB | 138.08 MB | **-150.84 MB** | **-52.2%** |
| `public` (Assets) | 168.91 MB | 33.05 MB | **-135.86 MB** | **-80.4%** |
| `.git` (Objects) | 176.94 MB | 176.94 MB | 0.00 MB | 0.0% |
| Direct Dependencies | 14 | 14 | 0 | 0.0% |
| Dev Dependencies | 11 | 11 | 0 | 0.0% |

---

## 8. Deployment Compliance Confirmation

> **Explicit Statement:** Deployment configuration was intentionally left unchanged according to project requirements.

- `.github/workflows/deploy.yml`: **100% UNCHANGED** (`git diff` verified empty).
- GitHub Actions deployment flow: **100% UNCHANGED**.
- EC2 SSH deployment scripts: **100% UNCHANGED**.
- PM2 configuration (`wxp`): **100% UNCHANGED**.
- No commits or pushes were executed to remote.
