import express from 'express';
const router = express.Router();
import Nomination from '../model/NominationModel.js';
import upload from '../utils/multer.js';
import cloudinary from '../utils/cloudinary.js';



router.post('/register', 
upload.fields([{
        name: 'profile', maxCount: 1
    }, {
        name: 'logo', maxCount: 1
}]), 
async (req, res) => {
    try {
        
        const result1 = await cloudinary.uploader.upload(req.files.profile[0].path);
        const result2 = await cloudinary.uploader.upload(req.files.logo[0].path);

        const nomination = new Nomination({
            profile: result1.url,
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            mobile_no: req.body.mobile_no,
            register_no: req.body.register_no,
            department: req.body.department,
            logo: result2.url,
            party_name: req.body.party_name,
            profile_cloudinary_id: result1.public_id,
            logo_cloudinary_id: result2.public_id,
        })

        await nomination.save();

        return res.status(200).json({
            success: true,
            msg: 'Registration successfull',
            data: nomination
        });

    } catch (err) {
        
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
})




router.get('/list', async (req, res) => {

    try {
        
        const nominationList = await Nomination.find();

        return res.status(200).json({
            success: true,
            count: nominationList.length,
            data: nominationList
        })

    } catch (err) {

        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
})



router.get('/details/:id', async (req, res) => {
    
    try {

        const id  = req.params.id;

        const nominationDetails = await Nomination.findById(id)

        return res.status(200).json({
            success: true,
            data: nominationDetails
        })

        
    } catch (err) {
         return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
})


export default router;
