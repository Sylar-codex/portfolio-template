const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content/posts");

let postList = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("failed to load contents of directory" + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetaDataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetaData = ({ lines, metaDataIndices }) => {
          if (metaDataIndices.length > 0) {
            let metaData = lines.slice(
              metaDataIndices[0] + 1,
              metaDataIndices[1]
            );
            metaData.forEach((line) => {
              const meta = line.split(":");
              obj[meta[0]] = meta[1];
            });
          }
          return obj;
        };
        const parseContent = ({ lines, metaDataIndices }) => {
          if (metaDataIndices.length > 0) {
            lines = lines.slice(metaDataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metaDataIndices = lines.reduce(getMetaDataIndices, []);
        const metaData = parseMetaData({ lines, metaDataIndices });
        const content = parseContent({ lines, metaDataIndices });
        const date = new Date(metaData.date);
        const timeStamp = date.getTime() / 1000;
        metaData.title = metaData.title.replaceAll('"', "").trim();
        if (metaData.img) {
          metaData.img = metaData.img.replaceAll('"', "").trim();
        }
        const metaDate = metaData.date;
        metaData.date = new Date(metaDate);

        post = {
          id: timeStamp,
          title: metaData.title ? metaData.title : "oops! no title given",
          date: metaData.date
            ? metaData.date.toDateString().split(" ").slice(1).join(" ")
            : "oops! no date given",
          excerpt: metaData.excerpt
            ? metaData.excerpt
            : "oops! no excerpt given",
          img: metaData.img ? metaData.img : null,
          content: content ? content : "oops! no content given",
        };
        postList.push(post);
        if (i === files.length - 1) {
          const sortedList = postList.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
  return;
};

getPosts();
