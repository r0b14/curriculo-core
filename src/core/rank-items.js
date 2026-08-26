function normalize(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function scoreItem(item, keywords) {
  const searchable = normalize([
    ...(item.tags ?? []),
    item.role,
    item.name,
    item.organization,
    item.description,
    ...(item.highlights ?? [])
  ].filter(Boolean).join(' '));

  return keywords.reduce((score, keyword) => score + (searchable.includes(normalize(keyword)) ? 1 : 0), 0);
}

export function rankItems(items = [], keywords = [], limit = items.length) {
  return items
    .map((item, index) => ({ item, index, score: scoreItem(item, keywords) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ item }) => item);
}
