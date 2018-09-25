describe("Calculater", function() {
    describe("Addition Test", function() {
        it("should return 42", function() {
            expect(add(20, 22)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(add(5, 5)).toBe(10);
        });
        it("should return an Error if both arguemts are not numbers", function() {
            expect(add("Fish", 5)).toBe("Error!")
        });
        it("should return an Error if one argument is null", function() {
            expect(add(42, null)).toBe("Error!")
        });
    });
    describe("Subtraction test", function() {
        it("should return 42", function() {
            expect(sub(84, 42)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(sub(22, 20)).toBe(2);
        });
        it("should show an alert on error", function() {
            spyOn(window, "alert");
            sub("Fish", 42);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    describe("Multi Test", function() {
        it("should return 42", function() {
            expect(multi(21, 2)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(multi(30, 3)).toBe(90);
        })
        it("should return an Error if both arguements are not numbers", function() {
            expect(multi("Hello", 34)).toBe("Error!")
        });
    });
    describe("Divison Test", function() {
        it("it should return 42", function() {
            expect(divison(84, 2)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(divison(24, 2)).toBe(12)
        })
        it("should return an error if both arguments are not a number", function() {
            expect(divison("cool", 45)).toBe("Error")
        })
    });
});
