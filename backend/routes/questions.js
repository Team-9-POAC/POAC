const express = require('express');
const router = express.Router();
const getConnection = require('../db')
const verifyToken = require('../middleware/verify-token');


// get patient

router.post("/get_patient", (req, res) => {
    console.log("OK")
    // const user = req.body;
    // const NHSno = user.NHSno;
    // const lastname = user.lastname;
    // const queryString = "SELECT patientID FROM patient WHERE NHSno = ? AND lastname = ?";

    // getConnection().query(queryString, [NHSno, lastname], (err, results_1, fields) => {

    //     if (err) {
    //         console.log("Failed to connect to the database." + err);
    //         return;
    //     }

    //     if (results_1.length === 0) {
    //         return res.status(404).json({
    //             message: "Patient not found"
    //         });
    //     }



    //     const queryString_2 = "SELECT responseID FROM response WHERE patientID = ?"
    //     getConnection().query(queryString, [results_1[0].patientID], (err, results_2, fields) => {

    //         if (err) {
    //             console.log("Failed to add to the database" + err);
    //             return;
    //         }
    
    //         if (results_2.length === 0) {

    //             res.send({})
    //         }

    //         console.log({})


    
    
    //         const answersQueryString = "SELECT responseID FROM response WHERE patientID = ?"
    
    //     })

    
        


    // })
})






// Adding new questions
router.post("/add_question", verifyToken, (req, res) => {

    const new_question = req.body
    const queryString = "INSERT INTO question SET ? "

    getConnection().query(queryString, req.body, (err, results, fields) => {
        if (err) {
            console.log("Failed to add a new question." + err);
            res.sendStatus(500);
            return;
        }

        // Just updating the json which was
        new_question.questionID = results.insertId

        res.send(new_question);
        console.log("Success, you have added a new question into the database.");
    })
})

// Deleting quesiton
router.get("/delete_question/:id", verifyToken, (req, res) => {

    const queryString = "DELETE FROM question WHERE questionID = ?"
    getConnection().query(queryString, req.params.id, (err, results, fields) => {
        if (err) {
            console.log("Failed to delete the question." + err);
            return;
        }
        res.send();
        console.log("Succesfully deleted the question.");

    })
})

// Obtain all the question
router.get("/questions", verifyToken, (req, res) => {

    const queryString = `SELECT questionID, question, questiontype.type, pos
    FROM question
    INNER JOIN questiontype ON question.type = questiontype.typeID
    ORDER BY pos ASC`
    getConnection().query(queryString, (err, results, fields) => {
        if  (err) {
            console.log("Failed to query the question" + err)
            res.sendStatus(500);
            return;
        }
        questions = results;

        var i;
        for (i = 0; i < results.length; i++) {
            questions[i].pos = i;
            questions[i]["answers"] = ""
        }

        console.log("yaaaiii")
        res.json(questions)
    });


});


module.exports = router;