function checkPropertyInObject(prop, obj) {
    if (prop in obj) {
        return true;
    } else {
        return false;
    }
}