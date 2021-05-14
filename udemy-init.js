// CLI Usage: node udemy-init <url>
// Output will be in the 'crawler-output' directory

const fs = require('fs');
const UdemyCrawler = require('udemy-crawler');
const dashify = require('dashify');

const url = process.argv[2];

if(!fs.existsSync('crawler-output')) {
  fs.mkdirSync('crawler-output');
}

// apply options
const crawler = new UdemyCrawler({
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
    'upgrade-insecure-requests': 1
  }
})

// execute crawler
crawler.execute(url, (err, course) => {
  if (err) {
    return console.error(err.message);
  }

  let mdOutput = `---\ntitle: "${course.title}"\nauthor: ${course.authors}\nurl: ${url}\n---\n# ${course.title}\n\n${course.authors}\n\n`;

  // console.log(course);
  console.log(course.curriculum.contents[0]);

  mdOutput += course.curriculum.contents.map(chapter => {
    return `## ${chapter.index}. ${chapter.title}\n` + chapter.items.map(item => `- [ ] [${item.title}](https://udemy.com/${item.learn_url}) (${item.content_summary})`).join('\n')
  }).join('\n\n')
  fs.writeFileSync(`crawler-output/${dashify(course.title, {condense: true})}.md`, mdOutput);
})
