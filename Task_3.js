// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjectWithoutProto() {
    func = Object.create(null);
    return func;
}