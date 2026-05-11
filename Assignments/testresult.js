let resposecode = 401;

if (resposecode == 200) {
    console.log("Test Passed")
}

else if (resposecode == 404) {
    console.log("Page Not Found")
}

else if (resposecode == 401) {
    console.log("Unauthorized Response")
}

else if (resposecode == 500) {
    console.log("Internal Server Error")
}

else if (resposecode == 302) {
    console.log("the requested resource has been temporarily moved ")
}


