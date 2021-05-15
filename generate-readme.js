const Walker = require("walker");
const { titleCase } = require("title-case");
const { noCase } = require("no-case");
const fs = require("fs");
const frontMatter = require("front-matter");

function sortKeys(objectToSort) {
  return Object.keys(objectToSort)
    .sort((a, b) => (a.toUpperCase() < b.toUpperCase() ? -1 : 1))
    .reduce((obj, key) => {
      obj[key] = objectToSort[key];
      return obj;
    }, {});
}

const dirs = {};

Walker(".")
  .filterDir(function (dir, stat) {
    const ignoreDirs = [".git", ".vscode", "node_modules", "crawler-output"];
    if (ignoreDirs.includes(dir)) {
      return false;
    }
    return true;
  })
  .on("dir", (dir, stat) => {
    if (dir.length > 1) {
      dirs[dir] = [];
    }
  })
  .on("file", (file, stat) => {
    const breadcrumbs = file.split("/");
    if (breadcrumbs.length < 2) {
      return;
    }
    breadcrumbs.pop();
    const dirName = breadcrumbs.join("/");

    if (!dirs[dirName]) {
      dirs[dirName] = [file];
    } else {
      dirs[dirName].push(file);
    }
  })
  .on("end", () => {
    let mdOutput =
      "# Personal Course/Book Progress\n\nProgress bars are [generated](generate-readme.js) from the Markdown files in each folder, counting up the checked and unchecked boxes in each file. Feel free to fork this repo and make your own course list!";
    for (const [dir, dirFiles] of Object.entries(sortKeys(dirs))) {
      const breadcrumbs = dir.split("/");
      const headerSymbol = "#".repeat(breadcrumbs.length + 1);
      const dirTitle = titleCase(noCase(breadcrumbs.pop()));

      mdOutput += `\n\n${headerSymbol} ${dirTitle}`;

      for (const file of dirFiles) {
        const courseTitle = file.split("/").pop().split(".")[0];
        const fileContents = fs.readFileSync(file).toString();
        const { title, author, url } = frontMatter(fileContents).attributes;
        if (!title) {
          continue;
        }
        const unchecked = fileContents.split("- [ ]").length - 1;
        const checked = fileContents.split("- [x]").length - 1;

        const percentage =
          Math.floor((checked * 100) / (unchecked + checked)) || 0;

        mdOutput += `\n- ![${percentage}%](https://progress-bar.dev/${percentage}/) [${title}](${file}) by ${author}`;
      }
    }
    fs.writeFileSync("README.md", mdOutput);
  });
