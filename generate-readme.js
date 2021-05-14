const Walker = require('walker');
const { titleCase } = require('title-case');
const { noCase } = require('no-case');
const fs = require('fs');
const frontMatter = require('front-matter')

const dirs = {};

Walker('.')
.filterDir(function(dir, stat) {
  const ignoreDirs = ['.git', '.vscode', 'node_modules']
  if (ignoreDirs.includes(dir)) {
    return false;
  }
  return true;
})
.on('dir', (dir, stat) => {
  if(dir.length > 1) {
    dirs[dir] = [];
  }
})
.on('file', (file, stat) => {
  const breadcrumbs = file.split('/');
  if(breadcrumbs.length < 2) {
    return;
  }
  breadcrumbs.pop();
  const dirName = breadcrumbs.join('/');

  if(!dirs[dirName]) {
    dirs[dirName] = [file];
  }
  else {
    dirs[dirName].push(file);
  }
})
.on('end', () => {
  let mdOutput = '';
  for(const [dir, dirFiles] of Object.entries(dirs)) {
    const breadcrumbs = dir.split('/');
    const headerSymbol = '#'.repeat(breadcrumbs.length);
    const dirTitle = titleCase(noCase(breadcrumbs.pop()));

    mdOutput += `\n\n${headerSymbol} ${dirTitle}`;

    for(const file of dirFiles) {
      const courseTitle = file.split('/').pop().split('.')[0];
      const fileContents = fs.readFileSync(file).toString();
      const { title, author, url } = frontMatter(fileContents).attributes;
      if(!title) {
        continue;
      }
      const unchecked = fileContents.split('- [ ]').length - 1;
      const checked = fileContents.split('- [x]').length - 1;

      const percentage = Math.floor(checked * 100 / unchecked) || 0;

      mdOutput += `\n- https://progress-bar.dev/${percentage} [${title} by ${author}](https://github.com/fossforlife/courses/${file})`;
    }
  }
  console.log(mdOutput);
})
