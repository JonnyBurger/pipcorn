const { promisify } = require("util");
const { xns } = require("xns");
const youtubedl = require("ytdl-core");
const openPip = require("open-pip");

const getInfo = promisify(youtubedl.getInfo);

xns(async () => {
  const info = await getInfo(process.argv[2]);
  const format = youtubedl.chooseFormat(info.formats, {});
  await openPip(format.url);
  await new Promise(resolve => setTimeout(resolve, 3000));
});
