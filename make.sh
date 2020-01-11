rm -rf bundled
npx webpack
rm -rf bundled/pip.app
mkdir bundled/pip.app
cp -r node_modules/open-pip/pip.app bundled
sed -i -e 's/new Buffer/Buffer.alloc/g' bundled/bundle.js
