#!/bin/bash
T="$HOME/VIBES/instructional-design-central/idc-web/public/course-screenshots/foundations"

# Try iCloud Desktop first, then local Desktop
ICLOUD="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Desktop"
LOCAL="$HOME/Desktop"

if ls "$ICLOUD"/*.png &>/dev/null 2>&1; then
  D="$ICLOUD"
  echo "Using iCloud Desktop: $D"
elif ls "$LOCAL"/*.png &>/dev/null 2>&1; then
  D="$LOCAL"
  echo "Using local Desktop: $D"
else
  echo "=== Could not find PNGs in either location ==="
  echo "iCloud Desktop: $ICLOUD"
  ls "$ICLOUD" 2>&1 | head -5
  echo "Local Desktop: $LOCAL"
  ls "$LOCAL" 2>&1 | head -5
  exit 1
fi

echo "=== PNG files found ==="
ls "$D"/*.png
echo ""

cp "$D/Screenshot 2026-05-29 at 4.46.37 PM.png" "$T/what-is-id-lesson.png"
cp "$D/Screenshot 2026-05-29 at 4.54.34 PM.png" "$T/learning-theory-lesson.png"
cp "$D/Screenshot 2026-05-29 at 4.49.55 PM.png" "$T/learning-theories-venn.png"
cp "$D/Screenshot 2026-05-29 at 4.47.37 PM.png" "$T/id-history-timeline.png"
cp "$D/Screenshot 2026-05-29 at 4.51.37 PM.png" "$T/adult-learning-discussion.png"
cp "$D/Screenshot 2026-05-29 at 4.49.20 PM.png" "$T/knowledge-check.png"
cp "$D/Screenshot 2026-05-29 at 4.41.30 PM.png" "$T/behaviorism-cards.png"
cp "$D/Screenshot 2026-05-29 at 4.52.14 PM.png" "$T/addie-model-lesson.png"
cp "$D/Screenshot 2026-05-29 at 4.56.30 PM.png" "$T/activity-slide.png"
cp "$D/Screenshot 2026-05-29 at 4.58.14 PM.png" "$T/course-exam.png"
cp "$D/Screenshot 2026-05-29 at 4.58.54 PM.png" "$T/certificate.png"

echo "Files copied:"
ls "$T"
