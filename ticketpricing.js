function pricing(age) {
    switch (true) {
        case age < 12:
            return 10;
        case age > 13 && age < 17:
            return 15;
        case age > 18:
            return 20;
        default:
            return 0;
    }
}