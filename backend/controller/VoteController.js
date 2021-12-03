import Vote from '../model/VotingModel.js';

const voteRegister = (req, res) => {

    try {
        
        const { register_no, email, voted } = req.body;

        Vote.findOne({ register_no : register_no }, (err, register) => {

            Vote.findOne({ email: email }, (err, isCheck) => {

                if (register) {

                    res.status(400).json({
                        success: false,
                        register_no: `${register_no}`,
                        registerErr: `Register number already exists`
                    })

                }else if(isCheck) {

                    res.status(400).json({
                        success: false,
                        email: `${email}`,
                        emailErr: `Email already exists`
                    })

                }else {

                    const newVoted = new Vote({
                        register_no,
                        email,
                        voted
                    })

                    newVoted.save(err => {
                        if (err) {
                            res.status(404).json({
                                success: false,
                                msg: "Auth Falied"
                            })
                        }else{
                            res.status(201).json({
                                success: true,
                                msg: "Voted Successfull"
                            })
                        }
                    })
                }

            })

        })

    } catch (err) {
        
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })

    }
}



const voteDetails = async (req, res) => {

    try {
        
        const details = await Vote.find();

        return res.status(200).json({
            success: true,
            count: details.length,
            data: details
        });

    } catch (err) {
        
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
    }
}


export { voteRegister, voteDetails };
