# Mun-Gi Jeon — AI Research & Portfolio Website

A modern, high-contrast, minimalist portfolio website for **Mun-Gi Jeon (전문기)**, AI & Multimodal Document Intelligence Researcher specializing in Vision-Language Models (VLM), OCR, and Retrieval-Augmented Generation (RAG).

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**, designed following a clean editorial monochrome aesthetic.

---

## 🚀 Key Highlights & Features

- **Pixel-Accurate Minimalist Aesthetic**: Monospaced accents, heavy grotesque display typography (`Bricolage Grotesque`), and balanced negative space.
- **Hero & Avatar**: Dual portrait presentation (circular hero headshot and tall editorial portrait card in the About section).
- **Interactive Tech Stack**: 3×2 grid cards covering Multimodal & Document AI, LLM/RAG, Model Training (PEFT/LoRA), and Systems Engineering.
- **Professional Expertise Pills**: Black pill badges with icons highlighting PyTorch, Hugging Face, Qwen-VL, Docker, and PostgreSQL.
- **Work History & Research Accordions**: Expandable career and research timeline with key achievements.
- **Featured Research & Projects**: Interactive cards with quantitative benchmarks (e.g., error preservation 41.0% → 62.3%, 50K synthetic dataset, Excellence Award, Top 100).
- **Publications & Academic Papers**: HCLT 2026, HCLT 2025, and Journal of KIISE oral and journal citations.
- **Bilingual Support**: Instant toggle between English (EN) and Korean (KO).
- **Printable CV Modal**: Integrated curriculum vitae with 1-click Print to PDF and Markdown export.

---

## 📦 How to Save to GitHub & Deploy to Vercel

### 1. Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: initial release of Mun-Gi Jeon portfolio"

# Create a new repository on GitHub, then link and push:
git remote add origin https://github.com/mjeon01/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Import your `portfolio` repository from GitHub.
4. The build settings are auto-detected via `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio will be live in seconds with automatic HTTPS and global edge CDN!

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
