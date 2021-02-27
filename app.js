//** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn=require("./middleware/getIpAddress");
app.use("*", ipFn);

//** methods */
app.get("/", (req, res, next)=>{
    res.send("welcome to academic rest api");
});

// users routes loading
const userRoutes = require("./routes/user.route");
userRoutes(app);

// token middleware
tkFn= require("./middleware/verifyToken");
app.use(tkFn)

// student routes loading
const studentRoutes = require("./routes/student.route");
studentRoutes(app);

// teacher routes loading
const teacherRoutes = require("./routes/teacher.route");
teacherRoutes(app);

// department routes loading
const departmentRoutes = require("./routes/department.route");
departmentRoutes(app);


// period routes loading
const periodRoutes = require("./routes/period.route");
periodRoutes(app);

// faculty routes loading
const facultyRoutes = require("./routes/faculty.route");
facultyRoutes(app);

// course routes loading
const courseRoutes = require("./routes/course.route");
courseRoutes(app);

app.listen(port, ()=>{
    console.log("Server is running...")
});