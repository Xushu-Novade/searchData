var config = require("./config.json");
var db = require("./db");
var path = config.path;

// output of results
var template = {
    templatename: "",
    statename: "",
    fieldname: ""
};
var templates = [template];
var results = {
    email: "",
    templates: templates
};

var promise_fields = await db.select(path, 'unybiz.forms.fields', 'value LIKE "%novadetrack.contacts%"');
promise_fields.then(function (fields) {
    fields.forEach((f) => {
        template.fieldname = f.name;
        templates = templates.push(template);
        console.log(template);
    });
});
// console.log(templates);

