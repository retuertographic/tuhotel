#!/usr/bin/env bash
# Descarga las imágenes originales de tuhotelaldia.com y sustituye los
# marcadores de posición de public/sites/tuhotelaldia/.
# Ejecútalo desde TU ordenador (el servidor bloquea IPs de nube):
#   bash scripts/download-tuhotelaldia-assets.sh
# Las imágenes imgs-servicios*.jpg ya las aportó la propietaria y no se descargan.
set -euo pipefail
cd "$(dirname "$0")/.."
DEST=public/sites/tuhotelaldia
BASE=https://tuhotelaldia.com
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
mkdir -p "$DEST"
FILES=(
  "images/logo_negative-1.png"
  "media/com_sppagebuilder/placeholder/server1.jpg"
  "media/com_sppagebuilder/placeholder/server2.jpg"
  "media/com_sppagebuilder/placeholder/server3.jpg"
  "media/com_sppagebuilder/placeholder/untitled-11.jpg"
  "media/com_sppagebuilder/placeholder/untitled-12.jpg"
  "media/com_sppagebuilder/placeholder/untitled-13.jpg"
  "media/com_sppagebuilder/placeholder/untitled-14.jpg"
  "media/com_sppagebuilder/placeholder/untitled-15.jpg"
  "media/com_sppagebuilder/placeholder/untitled-16.jpg"
  "media/com_sppagebuilder/placeholder/untitled-17.jpg"
  "media/com_sppagebuilder/placeholder/untitled-18.jpg"
  "media/com_sppagebuilder/placeholder/tenerife-job-training.jpg"
  "media/com_sppagebuilder/placeholder/key-properties.jpg"
)
for f in "${FILES[@]}"; do
  out="$DEST/$(basename "$f")"
  tmp="$out.download"
  if curl -fsSL -A "$UA" -o "$tmp" "$BASE/$f" && file "$tmp" | grep -qiE 'image|PNG|JPEG|WebP'; then
    mv "$tmp" "$out"; echo "OK   $f"
  else
    rm -f "$tmp"; echo "FAIL $f" >&2
  fi
done
