export class Form5 {
    studentID: String;
    studentName: String;
    employerName: String;
    supervisorName: String;
    description1: String;
    description2: String;
    description3: String;
    description4: String;
    description5: String;
    description6: String;
    description7: String;
    overallStudentPerformence: String;
    externalSupervisiorName: String;
    date: String;
    type: String;
}

export class Form1Supervisor{
    studentID: String;
    employersName: String;
    employersAddress: String;
    supervisorTitle: String;
    supervisorName: String;
    supervisorPhone: String;
    supervisorEmail: String;
    internshipStartDate: String;
    internshipEndDate: String;
    noHours_Week: Number; 
    //List of the tasks the students is expected to complete 
    studentExpectedTask:String;
    //List what the student will learn during the internship period 
    studentExpectedLearn: String;
    externalSupervisorName: String;
    //Date the Supervisor/Employer Fills the Form-I 
    date: String;
}
