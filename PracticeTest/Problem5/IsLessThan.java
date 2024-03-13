public class IsLessThan implements Runner {
    private int num;

    // Constructor that takes an integer parameter num
    public IsLessThan(int num) {
        this.num = num;
    }

    // Method to check if the provided integer is less than num
    public boolean someMethod(int i) {
        return i < num;
    }
}

