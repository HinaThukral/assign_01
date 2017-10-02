var fs = require("fs");

// console.log("Going to create directory posts");
// fs.mkdir(dir,function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Directory created successfully!");
// });

// console.log("Going to create directory posts");
// fs.mkdir('./build',function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Directory created successfully!");
// });

// console.log("Going to create directory posts");
// fs.mkdir('./templates',function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Directory created successfully!");
// });


let dir = './posts'
let i=0;

fs.readdir(dir, (err, files) => {
  if (err) console.log(err)
  // use forEach() to loop over the files
  files.forEach((file) => {
    // read the files, we need to provide the directory again as the array only contains file names
    fs.readFile(`${dir}/${file}`, 'utf8', (err, data) => {
        if (err) console.log(err)
      console.log(data)
       console.log(dir.length);
      let newHtml = `
  <html>
    <body>
      <div>${data}</div>
    </body>
  </html>
   `
   let page='./build/page' + i +'.html'
    fs.writeFile(page, newHtml.trim(), 'utf8', (err) => {
      
    if (err) console.log(err)
   
    
     
  
   })
   console.log('page' + i +'.html');
   i++;
 
    })
  
  })
})


let dir_build = './build'

fs.readdir(dir_build, (err, files) => {
  if (err) console.log(err)
  // use forEach() to loop over the files
  
  let y = ``;
  for(let i=0;i<files.length;i++){
      y += `<li><a href = "../build/`+files[i]+`">Page</a></li>`
  }
  
  
  let newHtml = `
  <html>
    <body>
      <div><ul>${y}</ul></div>
    </body>
  </html>
   `
   let page='templates/index.html';
   
    fs.writeFile(page, newHtml.trim(), 'utf8', (err) => {
      
    if (err) console.log(err)
   
    })


})