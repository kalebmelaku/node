const fs = require('fs');

//read
// fs.readFile('./blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

//write
// fs.writeFile('./blog.txt', 'Hello Kaleb' ,(err, data) => {
//     console.log('file is written');
// })

//directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('folder created');
//         }
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         console.log('folder removed');
//     })
// }


//delete
if (fs.existsSync('./blog.txt')) {
    fs.unlink('./blog.txt', (err) => { 
        if (err) {
            console.log(err);
        } else {
            console.log('deleted');
        }
    })
}