import React, { useState } from "react";
import hhLogo from '../../assets/hhLogo.jpeg'
import stemBuilders from "../../assets/stemBuilders.jpeg"



const experience = [
    {
        header: "Software Engineer - Internship",
        meta: "Helping Hands Community",
        image: hhLogo,
        description: "- Worked and communicated with others to make sure that high priority issues were sorted out.\n - Worked on front end React development to create new features such as Image confirmation, status count UI for Uber enterprise trips, a map that displays all the volunteers in a 5 mile radius of a given requester and etc.\n - Worked on backend development where I worked with Firebase functions to create, modify and delete delicate objects located in the Firestore no-sql database.",
        date: "April 2020 - Present"
    },
    {
        header: "Math Tutor",
        meta: "Stem Builders",
        description:"- Adapt teaching methods and instructional materials to meet students' varying needs, abilities, and interests.\n - Observe and evaluate students' work to determine progress and make suggestions for improvement.\n - Establish and enforce rules for behavior and procedures for maintaining order among the students for whom they are responsible. \n - Prepare students for further education by encouraging them to explore learning opportunities and to persevere with challenging tasks.",
        date: "Sep 2018 - May 2019",
        image:stemBuilders,

    }
];

export default experience