module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("reset.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: { input: "src", output: "_site", data: "_data" },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk"
  };
};
