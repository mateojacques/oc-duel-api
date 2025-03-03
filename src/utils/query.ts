export const buildQuery = (baseQuery: string, filters: Record<string, any>) => {
  const keys = Object.keys(filters).filter((key) => filters[key] !== undefined);
  if (keys.length === 0) return { query: baseQuery, values: [] };

  const conditions = keys.map((key, i) => `${key} = $${i + 1}`);
  const query = `${baseQuery} WHERE ${conditions.join(" AND ")}`;
  const values = keys.map((key) => filters[key]);

  return { query, values };
};
