(async function () {
  const opts = {
    actions: false,
    renderer: "canvas",
    config: {
      background: "white",
      axis: { labelColor: "#111827", titleColor: "#111827" },
      legend: { labelColor: "#111827", titleColor: "#111827" }
    }
  };

  await vegaEmbed("#austlang-map", "js/austlang_map.vg.json", opts);
  await vegaEmbed("#language-line", "js/language_spoken_line.vg.json", opts);
  await vegaEmbed("#population-bar", "js/aboriginal_bar.vg.json", opts);  
})();
