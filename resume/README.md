# Resume (RenderCV)

This CV is built with **[RenderCV](https://github.com/sinaatalay/rendercv)** — a Python tool that turns a single YAML file into a CV in several formats (PDF, HTML, Markdown, PNG, Typst). **French only** for now.

## Source

- **Input:** `Yoann_Fuks_CV.yaml` — edit this file to change the CV content.
- **Outputs:** generated in `rendercv_output/` (PDF, HTML, MD, PNG, TYP).

## How to use

1. **Install RenderCV** (Python 3.10+):
   ```bash
   pip install rendercv
   ```

2. **Generate the CV** from the project root (e.g. `resume/`):
   ```bash
   rendercv render Yoann_Fuks_CV.yaml
   ```
   Or **watch for changes** and re-render automatically:
   ```bash
   rendercv render --watch Yoann_Fuks_CV.yaml
   ```

3. Outputs are written to `rendercv_output/` with the same base name (e.g. `Yoann_Fuks_CV.pdf`).

## Tips

- The YAML file has a schema; use the `# yaml-language-server` line at the top for editor validation.
- Keep `yoann.jpeg` next to the YAML if you use the `photo` field.
- To change theme or layout, see [RenderCV docs](https://rendercv.readthedocs.io/).
