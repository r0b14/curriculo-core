FROM debian:bookworm-slim

LABEL org.opencontainers.image.title="Curriculo Core LaTeX compiler"
LABEL org.opencontainers.image.description="Isolated pdfLaTeX environment for Curriculo Core generated documents"

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        lmodern \
        texlive-latex-base \
        texlive-latex-extra \
        texlive-latex-recommended \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /work

ENTRYPOINT ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", "-no-shell-escape"]
