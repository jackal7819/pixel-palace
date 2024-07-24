export function formatFilterValues(filter: any) {
  const entries = Object.entries(filter);
  const result: string[] = [];

  const capitalizeWords = (input: string) => input.replace(/\b\w/g, char => char.toUpperCase());


  entries.forEach(([key, value]) => {
    if (Array.isArray(value) && value.length > 0) {
      result.push(...value.map(v => capitalizeWords(v)));
    } else if (typeof value === 'number') {
      if (key === "priceFrom") {
        result.push(capitalizeWords(`min, $: ${value.toString()}`));
      }
      if (key === "priceTo") {
        result.push(capitalizeWords(`max, $: ${value.toString()}`));
      }
    }
  });

  return result;
}