import cloudinary from 'cloudinary';

cloudinary.config({ 
    cloud_name: "ddni4sjyo", 
    api_key: "211571946931153", 
    api_secret: "w6h4pVJspTX4uQ6i5S3YyyP7gz4"

});


// const upload = (file, folder) => {

//     return new Promise(resolve => {
//         cloudinary.uploader.upload(file, (result) => {
//             resolve({
//                 url: result.url,
//                 id: result.public_id
//             })
//         }, {
//             resource_type: "auto",
//             folder: folder
//         })
//     })
// }

export default cloudinary;